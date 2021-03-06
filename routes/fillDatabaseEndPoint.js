var express = require('express');
var router = express.Router();
var Bartender = require('./objects/Bartender');
var Order = require('./objects/Order');
var Food = require('./objects/Food');
var Customer = require('./objects/Customer');
var mongoose = require('mongoose');

var getTotalPrice = function (foods) {
    var sum = 0;
    foods.forEach(function (item) {
        sum += Number(item.price);
    });
    return sum;
};

router.get('/', function (req, res) {
    var bartenders = [
        {name: "Első Aladár"},
        {name: "Második Béla"},
        {name: "Harmadik Cecil"},
        {name: "Negyedik Dénes"},
        {name: "Ötödik Elemér"}
    ];

    bartenders.forEach(function (item) {
        Bartender.create({
            _id: new mongoose.Types.ObjectId(),
            name: item['name']
        }, function (err, doc) {
            if (err !== null) {
                console.log("Hiba: " + err.toString());
                console.log(doc);
                return res.status(415).send(doc);
            }
        });
    });
    var customers = [
        {name: "Vásárló Ferenc", address: "Valami út 1."},
        {name: "Rendelő Géza", address: "Akármi utca 6."},
        {name: "Éhes Hanna", address: "Tetszőleges körút 11/a."}
    ];

    customers.forEach(function (item) {
        Customer.create({
            _id: new mongoose.Types.ObjectId(),
            name: item['name'],
            address: item['address']
        }, function (err, doc) {
            if (err !== null) {
                console.log("Hiba: " + err.toString());
                console.log(doc);
                return res.status(415).send(doc);
            }
        });
    });

    var foods = [
        {
            type: "Drink",
            name: "Víz",
            price: 50,
            ingredients: [
                "Víz"
            ]
        },
        {
            type: "Drink",
            name: "Gyümölcsszörp",
            price: 110,
            ingredients: [
                "Víz",
                "Gyümölcslé"
            ]
        },
        {
            type: "Drink",
            name: "Forró Csokoládé",
            price: 150,
            ingredients: [
                "Csokoládé"
            ]
        },

        {
            type: "Food",
            name: "Kijevi Pulykamell",
            price: 950,
            ingredients: [
                "Rizs",
                "Pulykamell"
            ]
        },
        {
            type: "Food",
            name: "Gyros tál",
            price: 890,
            ingredients: [
                "Csirke",
                "Hasábburgonya",
                "Saláta",
                "Öntet"
            ]
        },
        {
            type: "Food",
            name: "Rántott Csirkemell Filé",
            price: 850,
            ingredients: [
                "Csirkemell",
                "Hasábburgonya"
            ]
        },
        {
            type: "Food",
            name: "Gulyásleves",
            price: 980,
            ingredients: [
                "Répa",
                "Paprika",
                "Hús"
            ]
        }
    ];

    foods.forEach(function (item) {
        Food.create({
            _id: new mongoose.Types.ObjectId(),
            type: item['type'],
            name: item['name'],
            price: item['price'],
            ingredients: item['ingredients']
        }, function (err, doc) {
            if (err !== null) {
                console.log("Hiba: " + err.toString());
                console.log(doc);
                return res.status(415).send(doc);
            }
        });
    });

    var orders = [
        {
            status: "Closed",
            fulfilled: true,
            received: true,
            foods: [
                {name: "Gulyásleves", price: 980},
                {name: "Víz", price: 50}
            ],
            bartendersName: "Második Béla",
            customersName: "Rendelő Géza"
        },
        {
            status: "Open",
            fulfilled: false,
            received: false,
            foods: [
                {name: "Gulyásleves", price: 980},
                {name: "Gyümölcsszörp", price: 110},
                {name: "Gyümölcsszörp", price: 110}
            ],
            bartendersName: "Ötödik Elemér",
            customersName: "Éhes Hanna"
        },
        {
            status: "Open",
            fulfilled: false,
            received: true,
            foods: [
                {name: "Rántott Csirkemell Filé", price: 850},
                {name: "Forró Csokoládé", price: 150}
            ],
            bartendersName: "Negyedik Dénes",
            customersName: "Vásárló Ferenc"
        }
    ];

    var ordersFood;
    var price = 0;
    orders.forEach(function (item) {
        ordersFood = item['foods'];
        price = getTotalPrice(ordersFood);

        Order.create({
            _id: new mongoose.Types.ObjectId(),
            status: item['status'],
            fulfilled: item['fulfilled'],
            received: item['received'],
            foods: ordersFood,
            bartendersName: item['bartendersName'],
            customersName: item['customersName'],
            totalCost: price
        }, function (err, doc) {
            if (err !== null) {
                console.log("Hiba: " + err.toString());
                console.log(doc);
                return res.status(415).send(doc);
            }
        });
    });
    res.status(200).send("Adatbázis feltöltve.");
});

module.exports = router;