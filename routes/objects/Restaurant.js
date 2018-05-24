var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost:27017/Restaurant', {autoIndex: true});
db.on('error', console.error.bind(console, 'Csatlakozási hiba: '));
db.once('open', function () {
    console.log('MongoDB nyitva.');
});

module.exports = db;