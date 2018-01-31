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
    desc: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    upVotes: Number,
    downVotes: Number,
    totalVoters: Number
})

module.exports = mongoose.model("Spell", spellReSchema)