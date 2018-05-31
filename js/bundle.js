var $ = require('jquery');

var personOrdering = "";
var ordersSoFar = [];

$(document).ready(function(){
    // ================================
    // Az ételek feltöltése.
    // ================================

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
    });

    // ================================
    // Az italok feltöltése.
    // ================================

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
    });

    // ================================
    // A rendelések feltöltése.
    // ================================

    $.get('/manager/listOrders', function (data) {
        console.log(data);

        for (var i = 0; i < data.length; i++) {
            var holder = document.createElement('div');
            holder.className += " col-lg-4 col-md-6 mb-4";

            var card = document.createElement('div');
            card.className += " card";

            var body = document.createElement('div');
            body.className += " card-body";

            var title = document.createElement('h3');
            title.className += " card-title"
            title.innerHTML = data[i].customersName;
            body.append(title);

            var bartender = document.createElement('p');
            bartender.innerHTML = "Intézi: " + data[i].bartendersName;
            body.append(bartender);

            var status = document.createElement('p');
            if (data[i].status == "Open") {
                status.innerHTML = "Szabad"
            } else {
                status.innerHTML = "Lezárva"
            }
            body.append(status);

            var progress = document.createElement('p');
            if (data[i].received == false) {
                progress.innerHTML = "Nem kapta meg"
            } else {
                progress.innerHTML = "Megkapta"
            }

            if (data[i].fulfilled == false) {
                progress.innerHTML += ", nincs teljesítve"
            } else {
                progress.innerHTML += ", teljesítve"
            }
            body.append(progress);

            var order_list = document.createElement('ul');
            order_list.className += "list-group";

            for (j = 0; j < data[i].foods.length; j++) {
                var list_item = document.createElement('li');
                list_item.className += " list-group-item";
                list_item.innerHTML = data[i].foods[j].name + " (" +data[i].foods[j].price + ")";
                order_list.append(list_item);
            };
            body.append(order_list);

            card.append(body);
            holder.append(card);

            $('#orders').append(holder);
        }
    });
});

function addNewOrder(name, price) {
    ordersSoFar.push({
        name: name,
        price: price
    });
    console.log(ordersSoFar);
};