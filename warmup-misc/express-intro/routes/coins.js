const express = require("express");
const coinRoute = express.Router()


let coins = require("../coinDatabase.js")

coinRoute.route("/")
    // handle all requests to /coins here
    //get
    .get((req, res) => {
        let query = req.query
        console.log(req.query);
        coins.fileredCoins = coins.filter((coin) => {
            let found = true;
            for (let key in query) {
                if (coin[key] != query[key]) {
                    found = false;
                    break;
                }
            }
            return found;
        })
        res.send(filteredCoins)
    })

    .post((req, res) => {
        let newCoin = req.body;
        newCoin._id = uuid()
        console.log(coins.push(newCoin));
        res.send({
            msg: "data added",
            data: newCoin
        })
    })

coinRoute.route("/:id")
    .get((req, res) => {
        let { id } = req.params;
        let found = false;
        let foundCoin
        for (let i = 0; i < coins.length; i++) {
            if (coins[i]._id === id) {
                found = true;
                foundCoin = coins[i];
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was found!`
            });
        } else {
            res.send({
                msg: `Item ${id} does not exist!!`
            })
        }
    })


    .delete((req, res) => {
        let { id } = req.params;
        let found = false;
        // coins = coins.filter((coin)=> coin._id !== id);
        for (let i = 0; i < coins.length; i++) {
            if (coins[i]._id === id) {
                coins.splice(i, 1);
                found = true;
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was removed!`
            });
        } else {
            res.send({
                msg: `Item ${id} was not found!!`
            })
        }
    })

    .put((req, res) => {
        let { id } = req.params;
        let updatedCoin = req.body
        let found = false;
        for (let i = 0; i < coins.length; i++) {
            if (coins[i]._id === id) {
                coins[i] = Object.assign(coins[i], updatedCoin);
                updatedCoin = coins[i]
                found = true;
                break;
            }
        }
        if (found) {
            res.send({
                msg: `Item ${id} was updated!`,
                data: updatedCoin
            });
        } else {
            res.send({
                msg: `Item ${id} was not found!!`
            })
        }
    });

module.exports = coinRoute;