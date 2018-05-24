var express = require('express');
var router = express.Router();
var Costumer = require('./objects/Costumer');
var Order = require('./objects/Order');
var Food = require('./objects/Food');
var mongoose = require('mongoose');

var getTotalPrice = function (foods) {
    var sum = 0;
    foods.forEach(function (item) {
        sum += Number(item.price);
    });
    return sum;
};

router.post("/add", function (req, res) {
    Costumer.create({
        _id: new mongoose.Types.ObjectId(),
        name: req.body['name'],
        address: req.body['address']
    }, function (err, doc) {
        if (err !== null) {
            console.log("Hiba: " + err.toString());
            console.log(doc);
            res.status(415).send(doc);
        }
    });
});

router.post('/order', function (req, res) {
    var foods = req.body['foods'];
    var price = getTotalPrice(foods);
    Order.create({
        _id: new mongoose.Types.ObjectId(),
        status: "Open",
        fulfilled: false,
        received: false,
        foods: foods,
        bartendersName: req.body['bartendersName'],
        costumersName: req.body['costumersName'],
        totalCost: price
    }, function (err, doc) {
        if (err !== null) {
            console.log("Hiba: " + err.toString());
            console.log(doc);
            return res.status(415).send(doc);
        }
    });
});

router.get("/getDrinks", function (req, res) {
    Food.find({"type": "Drink"}).exec(function (err, doc) {
        if (err) {
            res.status(415).send(err.toString());
        }
        res.status(200).send(doc);
    });
});

router.get("/getFoods", function (req, res) {
    Food.find({"type": "Food"}).exec(function (err, doc) {
        if (err) {
            res.status(415).send(err.toString());
        }
        res.status(200).send(doc);
    });
});

module.exports = router;