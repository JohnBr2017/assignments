const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: Number,
    miscItems: [String],
    isMagical: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Inventory", inventorySchema);