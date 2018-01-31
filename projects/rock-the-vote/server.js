const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const spellReview = require("./routes/spellReviews.js")

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
const spellRouter = require("./routes/spellReviews.js")

app.use("/spellReview", spellRouter)

app.listen(config.port, ()=>{
    console.log("Listening on port " + config.port)
})
 