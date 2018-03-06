let MongoClient = require('mongodb').MongoClient;

let url = "mongodb://localhost:27017/myProject";

MongoClient.connect(url, (err, database) => {
    if (err) console.error(err);
    console.log("connected to DB");
    let db = database.db("myProject")
    let collection = db.collection('newCollection');
    collection.insertMany([{ a: 1 }, { b: 2 }, { c: 3 }], (err, result) => {
        if (err) console.error(err);
        console.log(result)
    });
    collection.find({}, (err, result)=>{
        if(err) console.error(err);
        console.log(result)
    });
    collection.deleteOne({a:1}), (err, result)=>{
        if (err) console.error(err);
        console.log(result)
    }
    collection.find({}, (err, result)=>{
        if(err) console.error(err);
        console.log(result)
    });
    database.close();
});











// let MongoClient = require(‘mongodb’);

// const insertDocuments = (db, callback) => {
//    // Get the documents collection
//    let collection = db.collection(‘v-school-students’);
//    // Insert some documents
//    collection.insert(
//      [{ name: ‘Kenny’ }, { name: ‘Ben’ }, { name: ‘Eric’ }],
//      (error, result) => {
//        if (error) return process.exit(1);
//        callback(result);
//      }
//    );
// };

// // Conneciton URL
// let url = ‘mongodb://localhost:27017/edx-course-db’;
// // Use connect method to connect to the server
// MongoClient.connect(url, (error, database) => {
//    if (error) return process.exit(1);
//    console.log(‘Connection is okay’);

//    // This was missing
//    // need to reference your database by
//    // name to access the correct object.
//    let db = database.db(‘v-school-db’);
//    insertDocuments(db, () => {
//        console.log(‘Insert successful’);
//    });
// });

// var findDocuments = function(db, callback) {
//    // Get the documents collection
//    var collection = db.collection(‘documents’);
//    // Find some documents
//    collection.find({}).toArray(function(err, docs) {
//      assert.equal(err, null);
//      console.log(“Found the following records”);
//      console.log(docs)
//      callback(docs);
//    });
// }