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
        name: String,
        desc: [String],
        higher_level: [String],
        page: String,
        range: String,
        components: String,
        material: {
            type: String,
            default: ""
        },
        ritual: String,
        duration: String,
        concentration: String,
        casting_time: String,
        level: Number,
        school: {
            name: String
        },
        classes: [{
            name: String
        }],
        _id: String
    
    }],
    active: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Player", playerSchema)