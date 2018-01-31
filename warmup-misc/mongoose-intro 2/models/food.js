const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    healthInfo: {
        calories: Number,
        satFats: Number,
        isOrganic: Boolean
    },
    isVegan: {
        type: Boolean,
        default: false
    },
    ingredients: [String]
});

module.exports = mongoose.model("Food", foodSchema);
