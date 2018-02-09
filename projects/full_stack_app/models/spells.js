const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpellSchema = new Schema({
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
    }]

});

module.exports = mongoose.model("Spells", SpellSchema)