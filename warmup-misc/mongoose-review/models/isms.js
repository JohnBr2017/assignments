const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ismSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    whoSaidIt: {
        type: String,
        required: true
    }

}, { timestamps: { createAt: 'created_at' } })

module.exports = mongoose.model("Ism", ismSchema);