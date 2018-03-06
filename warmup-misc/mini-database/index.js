const express = require("express");
const bodyParser = require("body-parser");

const partyMembers = require("./database");

const app = express();
let port = 8880;

//middleware
app.use(bodyParser.json());

//routes
app.get("/", (req, res) => {
    res.send(partyMembers)
})

app.post("/", (req, res) => {
    console.log(partyMembers.push(req.body));
    res.send({
        msg: "New Party Member",
        data: req.body
    })
})


app.listen(port, ()=>{
    console.log("Listening on port" + port)
})