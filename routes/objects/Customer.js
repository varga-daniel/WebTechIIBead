var mongoose = require('mongoose');
var db = require('./Restaurant');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    _id: Schema.ObjectId,
    name: String,
    address: String
}, {
    versionKey: false
});

module.exports = db.model("Customer", CustomerSchema);