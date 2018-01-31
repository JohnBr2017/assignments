
let database = [
    { a: 1, b: 1, c: 2 },
    { a: 0, b: 0, c: 2 },
    { a: 0, b: 1, c: 0 },
    { a: 1, b: 2, c: 2 }
];

let filterDatabase = (query, database) => {
    return database.filter(resource => {
        for (let key in query) {
            if (query[key] !== resource[key]) {
                return false;
            }
        }
        return true;
    })
}


console.log(filterDatabase({}, database));
//returns entire database array

console.log(filterDatabase({ dolphin: "squeak!" }, database));
//returns empty array

console.log(filterDatabase({ a: 1, c: 2 }, database));
    //returns 
// [
//     {a: 1, b: 1, c: 2},
//     {a: 1, b: 2, c: 2}
// ]