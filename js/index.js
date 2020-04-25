$(document).ready(function () {

    var viewProducts = JSON.parse(localStorage.getItem("products") || "[]");
    console.log('====================================');
    console.log(viewProducts);
    console.log('====================================');

    // var cart = [];
    // var cartItems = localStorage.setItem("cart", JSON.stringify(cart));

    var viewCart = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log('====================================');
    console.log(viewCart);
    console.log('====================================');




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
        spanB.textContext = `$${iterator.price}`;

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
        console.log(badge);
        badge.textContent = viewCart.length;
        console.log(viewCart.length);

    } else {
        console.log("No items in cart");
    }

    // Creating Cart Items
    var createCart = (card) => {
        var cardNodes = card.childNodes
        // console.log(cardNodes);

        var image = cardNodes[1];
        var cartLink = cardNodes[3];

        // OBJECT TO STORE EACH ITEM SELECTED BEFORE PUSHING INTO viewCart
        var itemObject = {};
        cartLink.addEventListener('click', (e) => {
            var imgPath = image.src;

            /*
             *  REQUIRED PATH === PATH USED IN HTML CODE
             * RUN THIS SNIPPET BELOW (var requiredPath) = console.log(requiredPath); to view path.
             * CROSS REFERENCE PATH WITH IMG SRC IN LEGACY INDEX
             */

            var requiredPath = '.' + imgPath.slice(21);
            console.log(requiredPath);

            // FILTERING OUT REQUIRED DATA FROM LOCAL STORAGE
            var productObject = viewProducts.filter(x => x.url === requiredPath);
            console.log(productObject);

            itemObject.image = productObject[0].url;
            itemObject.name = productObject[0].name;
            itemObject.price = Number(productObject[0].price);
            itemObject.quantity = 1;

            // cartItems.push(itemA);
            console.log('====================================');
            console.log(itemObject);
            console.log('====================================');
            alert(`${itemObject.name} added!`)

            cartTemplate(itemObject);

            viewCart.push(itemObject);

            console.log(viewCart);

            badge.textContent = viewCart.length;

            // STORING CART ITEMS IN LOCAL STORAGE
            localStorage.setItem("cart", JSON.stringify(viewCart));
        })





    }

    // DECK A (CART-ICON FUNCTION)
    var cardA1 = document.getElementById('card-A1');
    var cardA2 = document.getElementById('card-A2');
    var cardA3 = document.getElementById('card-A3');

    createCart(cardA1);
    createCart(cardA2);
    createCart(cardA3);

    // DECK B (CART ICON FUNCTION)
    var cardB1 = document.getElementById('card-B1');
    var cardB2 = document.getElementById('card-B2');
    var cardB3 = document.getElementById('card-B3');

    createCart(cardB1);
    createCart(cardB2);
    createCart(cardB3);




    var viewRoute = (element, route) => {
        element.addEventListener('click', (e) => {
            element.href = route;
        })
    }

    // DECK A (VIEW ICON FUNCTION)
    var viewLinkA1 = document.getElementById("view-linkA1");
    var viewLinkA2 = document.getElementById("view-linkA2");
    var viewLinkA3 = document.getElementById("view-linkA3");

    viewRoute(viewLinkA1, 'product-A.html');
    viewRoute(viewLinkA2, 'product-B.html');
    viewRoute(viewLinkA3, 'product-C.html');

    // DECK B (VIEW ICON FUNCTION)
    var viewLinkB1 = document.getElementById("view-linkB1");
    var viewLinkB2 = document.getElementById("view-linkB2");
    var viewLinkB3 = document.getElementById("view-linkB3");

    viewRoute(viewLinkB1, 'product-D.html');
    viewRoute(viewLinkB2, 'product-E.html');
    viewRoute(viewLinkB3, 'product-F.html');



})