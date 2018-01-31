const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const ismsRouter = require("./routes/isms.js")

const app = express();
mongoose.connect("mongodb://localhost:27017",()=>{
    console.log('connected to MongoDB')
})

app.use(bodyParser.json())
app.use("/isms", ismsRouter)

app.listen(8080, ()=>{
    console.log('connected to port 8080')
});