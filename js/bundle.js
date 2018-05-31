var $ = require('jquery');

var personOrdering = "";
var ordersSoFar = [];

$(document).ready(function(){
    $.get('/customer/getFoods', function (data) {
        //console.log(data);

        for (var i = 0; i < data.length; i++) {
            var holder = document.createElement('div');
            holder.className += " col-lg-3 col-md-6 mb-4";

            var card = document.createElement('div');
            card.className += " card";

            var image = document.createElement('img');
            image.setAttribute('src','http://placehold.it/500x325');
            image.className += "card-img-top";

            var body = document.createElement('div');
            body.className += " card-body";

            var header = document.createElement('h4');
            header.className += " card-title";
            header.innerHTML = data[i].name;
            body.append(header);

            var ingredients_list = document.createElement('ul');
            ingredients_list.className += "list-group";

            for (j = 0; j < data[i].ingredients.length; j++) {
                var list_item = document.createElement('li');
                list_item.className += " list-group-item";
                list_item.innerHTML = data[i].ingredients[j];
                ingredients_list.append(list_item);
            };
            body.append(ingredients_list);

            var footer = document.createElement('div');
            footer.className += " card-footer";

            var buyButton = document.createElement('a');
            buyButton.className += " btn btn-primary";
            //buyButton.onclick = function() {addNewOrder(data[i].name, data[i].price)};
            buyButton.innerHTML = "Megrendel " + data[i].price + " Ft-ért";

            footer.append(buyButton);
            card.append(image);
            card.append(body);
            card.append(footer);
            holder.append(card);

            $('#choices').append(holder);
        }
    })

    $.get('/customer/getDrinks', function (data) {
        //console.log(data);

        for (var i = 0; i < data.length; i++) {
            var holder = document.createElement('div');
            holder.className += " col-lg-3 col-md-6 mb-4";

            var card = document.createElement('div');
            card.className += " card";

            var image = document.createElement('img');
            image.setAttribute('src','http://placehold.it/500x325');
            image.className += "card-img-top";

            var body = document.createElement('div');
            body.className += " card-body";

            var header = document.createElement('h4');
            header.className += " card-title";
            header.innerHTML = data[i].name;
            body.append(header);

            var ingredients_list = document.createElement('ul');
            ingredients_list.className += "list-group";

            for (j = 0; j < data[i].ingredients.length; j++) {
                var list_item = document.createElement('li');
                list_item.className += " list-group-item";
                list_item.innerHTML = data[i].ingredients[j];
                ingredients_list.append(list_item);
            };
            body.append(ingredients_list);

            var footer = document.createElement('div');
            footer.className += " card-footer";

            var buyButton = document.createElement('a');
            buyButton.className += " btn btn-primary";
            //buyButton.onclick = function() {addNewOrder(data[i].name, data[i].price)};
            buyButton.innerHTML = "Megrendel " + data[i].price + " Ft-ért";

            footer.append(buyButton);
            card.append(image);
            card.append(body);
            card.append(footer);
            holder.append(card);

            $('#drinks').append(holder);
        }
    })
});

function addNewOrder(name, price) {
    ordersSoFar.push({
        name: name,
        price: price
    });
    console.log(ordersSoFar);
};