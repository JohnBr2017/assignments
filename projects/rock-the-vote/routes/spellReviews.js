const express = require("express");
const spellRouter = express();
const spellModel = require("../models/spellReviews.js");


spellRouter.route("/")
    .get((req, res) => {
        spellModel.find(req.query, (err, foundSpell) => {
            if (err) {
                console.log(err);
            } else {
                res.send(foundSpell)
            }
        })
    })
    .post((req, res) => {
        let newSpell = new spellModel(req.body)
        newSpell.save((err, savedSpell) => {
            if (err) {
                console.log(err);
            } else {
                res.send(savedSpell)
            }

        })
    })
spellRouter.route("/:id")
    .get((req, res) => {
        let { id } = req.params
        spellModel.findOne({ _id: id }, (err, foundSpell) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundSpell)
            }
        })
    })
    .delete((req, res) => {
        let { id } = req.params
        spellModel.findByIdAndRemove(id, (err, deletedSpell)=>{
            if (err) {
                console.error(err);
            } else {
                res.send(deletedSpell)
            }
        })
    })
    .put((req, res) => {
        let { id } = req.params
        spellModel.findByIdAndUpdate(id, req.body, {new:true}, (err, updatedSpell)=>{
            if (err) {
                console.error(err);
            } else {
                res.send(updatedSpell)
            }
        })
    })


module.exports = spellRouter