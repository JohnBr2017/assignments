const mongoose = require("mongoose");
const Schema = mongoose.Schema

const playerSchema = new Schema({
    playerName: {
        type: String,
        required: true
    },
    playerClass: {
        type: String,
        required: true
    },
    listOfSpells: [Object]
})

module.exports = mongoose.model("Player", playerSchema)