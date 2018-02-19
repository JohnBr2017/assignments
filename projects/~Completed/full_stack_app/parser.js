const axios = require("axios");
const SpellModel = require("./models/spells")

module.exports = async (spells) => {
    SpellModel.remove({}, (err) => console.error(err));
    let output = [];
    for (let i = 0; i < spells.length; i++) {
        let response = await axios.get(spells[i].url)
        output[i] = response.data;
    }
    return output;
}