// Fogalmam sincs miért, de nekem nem érzékeli a scss-t, hiába van feltelepítve.
// Így inkább sass-t használtam a "css" scriptben.

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var pointBartender = require('./routes/bartenderEndPoint');
var pointFood = require('./routes/foodEndPoint');
var pointOrder = require('./routes/orderEndPoint');
var pointCustomer = require ('./routes/customerEndPoint');
var pointManager = require('./routes/managerEndPoint');

var initDatabase = require('./routes/fillDatabaseEndPoint');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/bartender', pointBartender);
app.use('/food', pointFood);
app.use('/order', pointOrder);
app.use('/customer', pointCustomer);
app.use('/manager', pointManager);

app.use('/db', initDatabase);

app.listen(8080, function(){
    console.log("A szerver a 8080 porton hallgat.")
});