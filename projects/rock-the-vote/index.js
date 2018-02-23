const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const review = require("./routes/reviews.js")

const config = require("./config");
const cors = require("cors");

const app = express();
mongoose.connect("mongodb://localhost:27017",()=>{
    console.log('Connected to MongoDB')
})
// middleware
app.use(bodyParser.json());
app.use(cors());
// routes
const reviewRouter = require("./routes/reviews.js")

app.use("/review", reviewRouter)

app.listen(config.port, ()=>{
    console.log("Listening on port " + config.port)
})
 