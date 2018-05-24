var express = require('express');
var router = express.Router();
var Bartender = require('./objects/Bartender');
var Order = require('./objects/Order');
var mongoose = require('mongoose');

router.post("/add", function (req, res) {
    Bartender.create({
        _id: new mongoose.Types.ObjectId(),
        name: item['name']
    }, function (err, doc) {
        if (err !== null) {
            console.log("Hiba: " + err.toString());
            console.log(doc);
            res.status(415).send(doc);
        }
    });
});

router.post("/completeOrder", function (req, res) {
    Order.update(
        {costumersName: req.body['costumersName']},
        {$set: {received: true, fulfilled: true, status: "Closed"}}, function (err, doc) {
            if (err !== null) {
                res.status(500).send(err);
            }
            res.status(200).send(doc);
        });
});

router.get("/allIncompleteOrders", function (req, res) {
    Order.find({status: "Open"}).exec(function (err, doc) {
        res.status(200).send(doc);
    });
});

module.exports = router;