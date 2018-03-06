const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const axios = require("axios")

const config = require("./config")
const cors = require("cors");

const app = express();
mongoose.connect("mongodb://localhost:27017",()=>{
    console.log("Connected to MongoDB")
})
// middleware
app.use(bodyParser.json());
app.use(cors());
//routes
const playerRoute = require("./routes/player")
const spellsRoute = require("./routes/spells")

//app.use
app.use("/player", playerRoute)
app.use("/spells", spellsRoute)

//parser used to update and populate the spell database
// const parser = require("./parser");
// const SpellModel = require("./models/spells");

// const dndUrl = "http://dnd5eapi.co/api/spells/";

// app.get("/spells", (req, res) => {
//     axios.get(dndUrl)
//         .then((response) => {
//             let { results } = response.data;
//             parser(results).then(parsedSpells => {
//                 SpellModel.insertMany(parsedSpells, (err, spells) => {
//                     if (err)
//                         console.error(err)
//                     else
//                         res.send(spells);
//                 });
//             });
//         })
//         .catch(err => console.error(err))
// })

app.listen(config.port, ()=>{
    console.log("Listening on port " + config.port)
})