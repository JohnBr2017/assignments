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
    listOfSpells: [{ 
        type: Schema.Types.ObjectId,
        ref: "Spells"
    }]
})

module.exports = mongoose.model("Player", playerSchema)