var mongoose = require('mongoose');
var db = require('./Restaurant');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    _id: Schema.ObjectId,
    status: {
        type: String,
        enum: ["Open", "Closed"],
        require: [true, "Hiányzó típus!"]
    },
    fulfilled: Boolean,
    received: Boolean,
    foods: [{
        _id: false,
        name: String,
        price: Number
    }],
    bartendersName: String,
    customersName: String,
    totalCost: Number
}, {versionKey: false});

module.exports = db.model("Order", OrderSchema);