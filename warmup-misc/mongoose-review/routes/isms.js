const express = require("express");
const ismsRouter = express();
const ismModel = require("../models/isms.js");


ismsRouter.route("/")
    .post((req, res) => {
        let newIsm = new ismModel(req.body)
        newIsm.save((err, savedIsm) => {
            if (err) {
                console.error(err);
            } else {
                res.send(savedIsm)
            }
        });
    })
    .get((req, res) => {
        ismModel.find(req.query, (err, foundIsms) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundIsms)
            }
        });
    });
ismsRouter.route("/:id")
    .get((req, res) => {
        let { id } = req.params
        ismModel.findOne({ _id: id }, (err, foundIsm) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundIsm)
            }
        });
    })
    .delete((req, res) => {
        let { id } = req.params
        ismModel.findByIdAndRemove(id, (err, deletedIsm) => {
            if (err) {
                console.error(err);
            } else {
                res.send(deletedIsm)
            }
        })
    })
    .put((req, res) => {
        let { id } = req.params
        ismModel.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedIsm) => {
            if (err) {
                console.error(err);
            } else {
                res.send(updatedIsm)
            }
        })
        // Inventory.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedItem)=>{
        //     if(err) return res.status(500).send(err);
        //     return res.send(updatedItem)
        // })
    })



module.exports = ismsRouter