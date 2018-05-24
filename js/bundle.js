var $ = require('jquery');

$(document).ready(function(){
    $.get('/customer/getFoods', function (data) {
        console.log(data);

        var holder = document.createElement('div');
        holder.className += " col-lg-3 col-md-6 mb-4";

        for (var i; i < data.length; i++) {
            var card = document.createElement('div');
            card.className += " card";

            var body = document.createElement('div');
            body.className += " card-body";

            var header = document.createElement('h4');
            header.className += " card-title";
            header.innerHTML = data[i].name;

            for (j in data[i].ingredients) {
                var para = document.createElement('p');
                para.className += " card-text";
                para.innerHTML = j;
                body.append(para);
            };

            var footer = document.createElement('div');
            footer.className += " card-footer";

            var buyButton = document.createElement('a');
            buyButton.innerHTML = "Megrendel " + data[i].price + " Ft-ért";

            footer.append(buyButton);
            body.append(header);
            card.append(footer);
            card.append(body);
            holder.append(card);
        }

        $('#choices').append(holder);
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