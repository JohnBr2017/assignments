const mongoose = require("mongoose");
const Schema = mongoose.Schema

const spellReSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: "Anonymous",
        required: true
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
})

module.exports = mongoose.model("Spell", spellReSchema)