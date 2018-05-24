var mongoose = require('mongoose');
var db = require('./Restaurant');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
        _id: Schema.ObjectId,
        type: {
            type: String,
            enum: ["Food", "Drink"],
            require: [true, "Hiányzó típus!"]
        },
        name: String,
        price: Number,
        ingredients: Array
    }, {versionKey: false}
);

module.exports = db.model("Food", FoodSchema);