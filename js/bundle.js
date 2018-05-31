var $ = require('jquery');

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
            buyButton.className =+ " btn btn-primary";
            buyButton.setAttribute('href','#');
            buyButton.innerHTML = "Megrendel " + data[i].price + " Ft-ért";

            footer.append(buyButton);
            card.append(image);
            card.append(body);
            card.append(footer);
            holder.append(card);

            $('#choices').append(holder);
        }
    })
});

/*
<div class="col-lg-3 col-md-6 mb-4">
    <div class="card">
        <img class="card-img-top" src="http://placehold.it/500x325" alt="">
        <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
        </div>
        <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
            <a href="#" class="btn btn-secondary">Find Out More!</a>
        </div>
    </div>
</div>
 */