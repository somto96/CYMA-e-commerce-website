$(document).ready(function () {

    var viewProducts = JSON.parse(localStorage.getItem("products") || "[]");
    // console.log('====================================');
    // console.log(viewProducts);
    // console.log('====================================');

    // var cart = [];
    // var cartItems = localStorage.setItem("cart", JSON.stringify(cart));

    var viewCart = JSON.parse(localStorage.getItem("cart") || "[]");
    // console.log('====================================');
    // console.log(viewCart);
    // console.log('====================================');




    var cartTemplate = (iterator) => {
        var cartList = document.getElementById('cart-list');

        var cartDiv = document.createElement('div');
        var divA = document.createElement('div');
        var divB = document.createElement('div');
        var divC = document.createElement('div');
        var image = new Image();
        var textLink = document.createElement('a');
        var spanA = document.createElement('span');
        var spanB = document.createElement('span');
        var link = document.createElement('a');
        var icon = document.createElement('i');

        cartDiv.classList.add('row', 'text-center');
        divA.classList.add('col-md-4');
        divB.classList.add('col-md-4', 'details-col');
        divC.classList.add('col-md-4', 'remove-col');
        image.classList.add('cart-img');
        textLink.classList.add('text-link');
        link.classList.add('remove-btn');
        icon.classList.add('fas', 'fa-trash');

        image.src = `${iterator.image}`;
        textLink.href = '#';
        spanA.textContent = `${iterator.name}`;
        spanB.textContext = `₦${iterator.price}`;

        divA.appendChild(image);
        textLink.appendChild(spanA);
        textLink.appendChild(spanB);
        divB.appendChild(textLink);
        divB.appendChild(spanB);
        link.appendChild(icon);
        divC.appendChild(link);

        cartDiv.appendChild(divA);
        cartDiv.appendChild(divB);
        cartDiv.appendChild(divC);

        cartList.appendChild(cartDiv);
    }
    // DISPLAYS ALL CART ITEMS RETRIEVED FROM LOCAL STORAGE ON WINDOW LOAD / REFRESH
    if (viewCart.length !== 0) {}
    // DISPLAYS ALL CART ITEMS RETRIEVED FROM LOCAL STORAGE ON WINDOW LOAD / REFRESH
    if (viewCart.length !== 0) {
        for (let i = 0; i < viewCart.length; i++) {
            cartTemplate(viewCart[i]);
        }
        // DISPLAYS NUMBER OF ITEMS IN CART
        var badge = document.querySelector('#cart-length');
        // console.log(badge);
        badge.textContent = viewCart.length;
        // console.log(viewCart.length);

    } 
    // else {
    //     console.log("No items in cart");
    // }



})