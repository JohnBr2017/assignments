const mongoose = require("mongoose");
const Schema = mongoose.Schema

const spellReSchema = new Schema({
    spellName: {
        type: String,
        required: true
    },
    school: {
        type: String,
        default: "Unknown"
    },
    author: {
        type: String,
        default: "Anonymous"
    },
    desc: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    upVotes: {
        type: Number,
        default: 0
    },
    downVotes: {
        type: Number,
        default: 0
    },
    totalVoters: {
        type: Number,
        default: 0
    },
    comments: [String]
})

module.exports = mongoose.model("Spell", spellReSchema)