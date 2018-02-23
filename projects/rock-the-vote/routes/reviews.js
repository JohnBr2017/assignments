const express = require("express");
const reviewsRouter = express();
const reviewModel = require("../models/reviews.js");


reviewsRouter.route("/")
    .get((req, res) => {
        reviewModel.find(req.query, (err, foundReview) => {
            if (err) {
                console.log(err);
            } else {
                res.send(foundReview)
            }
        })
    })
    .post((req, res) => {
        let newReview = new reviewModel(req.body)
        newReview.save((err, newReview) => {
            if (err) {
                console.log(err);
            } else {
                res.send(newReview)
            }

        })
    })
reviewsRouter.route("/:id")
    .get((req, res) => {
        let { id } = req.params 
        reviewModel.findOne({ _id: id }, (err, foundReview) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundReview)
            }
        })
    })
    .delete((req, res) => {
        let { id } = req.params
        reviewModel.findByIdAndRemove(id, (err, deletedReview)=>{
            if (err) {
                console.error(err);
            } else {
                res.send(deletedReview)
            }
        })
    })
    .put((req, res) => {
        let { id } = req.params
        console.log(req.body)
        reviewModel.findByIdAndUpdate(id, req.body, {new:true}, (err, updatedReview)=>{
            console.log(req.body, "after findbyid")
            if (err) {
                console.error(err);
            } else {
                res.send(updatedReview)
            }
        })
    })


module.exports = reviewsRouter