const express = require("express");
const inventoryRoutes = express.Router();
const Inventory = require("../models/inventory");

inventoryRoutes.route("/")
    .get((req, res)=>{
        Inventory.find((err, items)=>{
            if(err) return res.status(500).send(err);
            return res.send(items)
        })
    })
    .post((req, res)=>{
        const newItems = new Inventory(req.body);
        newItems.save((err)=>{
            if(err) return res.status(500).send(err);
            return res.send(newItems)
        })
    })
inventoryRoutes.route("/:id")
    .get((req, res)=>{
        Inventory.findById(req.params.id, (err, items)=>{
            if(err) return res.status(500).send(err);
            return res.send(items)
        })
    })
    .put((req, res)=>{
        Inventory.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedItem)=>{
            if(err) return res.status(500).send(err);
            return res.send(updatedItem)
        })
    })
    .delete((req, res)=>{
        Inventory.findByIdAndRemove(req.params.id, (err, deletedItem)=>{
            if(err) return res.status(500).send(err);
            return res.send(deletedItem) 
        })
    })


module.exports = inventoryRoutes;