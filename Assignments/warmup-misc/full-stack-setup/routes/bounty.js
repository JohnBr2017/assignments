const express = require("express");
const bountyRoute = express.Router();
const database = require("../database.js")

bountyRoute.route("/")
    .get((req, res) => {
        res.send(database)
    })

module.exports = bountyRoute;