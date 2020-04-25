$(document).ready(function () {
    // RETRIEVING PRODUCT DATA FROM LOCAL STORAGE
    var viewProducts = JSON.parse(localStorage.getItem("products") || "[]");
    console.log('====================================');
    console.log(viewProducts);
    console.log('====================================');

    // RETRIEVING CART ITEMS FORM LOCAL STORAGE
    var viewCart = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log('====================================');
    console.log(viewCart);
    console.log('====================================');

    // TEMPLATE FOR CART ITEMS
    var cartTemplate = (item) => {
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

        image.src = `${item.image}`;
        textLink.href = '#';
        spanA.textContent = `${item.name}`;
        spanB.textContext = `$${item.price}`;

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
    };

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


    // MOVES ITEMS SELECTED TO CART
    var createCart = (card) => {
        var cardNodes = card.childNodes
        // console.log(cardNodes);

        var image = cardNodes[1];
        var cartLink = cardNodes[3];
        var viewLink = cardNodes[5];

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

    // RUNNING CREATE CART FUNCTION

    // READY TO WEAR 
    var cardA1 = document.getElementById('card-A1');
    createCart(cardA1);
    var cardA2 = document.getElementById('card-A2');
    createCart(cardA2);
    var cardA3 = document.getElementById('card-A3');
    createCart(cardA3);
    var cardA4 = document.getElementById('card-A4');
    createCart(cardA4);

    // BRIDAL
    var cardB1 = document.getElementById('card-B1');
    createCart(cardB1);
    var cardB2 = document.getElementById('card-B2');
    createCart(cardB2);
    var cardB3 = document.getElementById('card-B3');
    createCart(cardB3);
    var cardB4 = document.getElementById('card-B4');
    createCart(cardB4);

    // BESPOKE
    var cardC1 = document.getElementById('card-C1');
    createCart(cardC1);
    var cardC2 = document.getElementById('card-C2');
    createCart(cardC2);
    var cardC3 = document.getElementById('card-C3');
    createCart(cardC3);
    var cardC4 = document.getElementById('card-C4');
    createCart(cardC4);


    // viewRoute Function
    var viewRoute = (element, route) => {
        element.addEventListener('click', (e) => {
            element.href = route;
        })
    }

    // CAROUSEL A (VIEW ICON FUNCTION)
    var viewLinkA1 = document.getElementById("view-linkA1");
    var viewLinkA2 = document.getElementById("view-linkA2");
    var viewLinkA3 = document.getElementById("view-linkA3");
    var viewLinkA4 = document.getElementById("view-linkA4");

    viewRoute(viewLinkA1, 'product-G.html');
    viewRoute(viewLinkA2, 'product-H.html');
    viewRoute(viewLinkA3, 'product-I.html');
    viewRoute(viewLinkA4, 'product-J.html');

    //  CAROUSEL B (VIEW ICON FUNCTION)
    var viewLinkB1 = document.getElementById("view-linkB1");
    var viewLinkB2 = document.getElementById("view-linkB2");
    var viewLinkB3 = document.getElementById("view-linkB3");
    var viewLinkB4 = document.getElementById("view-linkB4");

    viewRoute(viewLinkB1, 'product-K.html');
    viewRoute(viewLinkB2, 'product-L.html');
    viewRoute(viewLinkB3, 'product-M.html');
    viewRoute(viewLinkB4, 'product-N.html');

    //  CAROUSEL C (VIEW ICON FUNCTION)
    var viewLinkC1 = document.getElementById("view-linkC1");
    var viewLinkC2 = document.getElementById("view-linkC2");
    var viewLinkC3 = document.getElementById("view-linkC3");
    var viewLinkC4 = document.getElementById("view-linkC4");

    viewRoute(viewLinkC1, 'product-O.html');
    viewRoute(viewLinkC2, 'product-E.html');
    viewRoute(viewLinkC3, 'product-D.html');
    viewRoute(viewLinkC4, 'product-P.html');

    // Clearing Cart
    // var clearCart = document.getElementById('clear-cart');
    // clearCart.addEventListener('click', (e) => {
    //     localStorage.removeItem('cart');
    //     var badge = document.querySelector('#cart-length');
    //     badge.textContent = 0;
    // })



    // var template = (parentElement, imgUrl, productName, productPrice) => {
    //     var cardDiv = document.createElement('div');
    //     var img = new Image(); // Create new img element
    //     var linkA = document.createElement('a');
    //     var linkB = document.createElement('a');
    //     var iconDivA = document.createElement('div');
    //     var iconDivB = document.createElement('div');
    //     var cardBodyDiv = document.createElement('div');
    //     var heading = document.createElement('h5');
    //     var paragraph = document.createElement('p');
    //     var iconA = document.createElement('i');
    //     var iconB = document.createElement('i');

    //     cardDiv.classList.add('card');
    //     cardDiv.setAttribute('id', 'card');
    //     linkA.setAttribute('id', 'cart-link');
    //     linkB.setAttribute('id', 'view-link');
    //     img.setAttribute('class', 'card-img-top');
    //     iconDivA.classList.add('cart-icon', 'text-center');
    //     iconDivB.classList.add('view-icon', 'text-center');
    //     iconA.classList.add('fas', 'fa-shopping-cart');
    //     iconB.classList.add('far', 'fa-eye');
    //     cardBodyDiv.classList.add('card-body', 'text-center');
    //     heading.classList.add('card-title');
    //     paragraph.classList.add('card-text');

    //     img.src = imgUrl;
    //     heading.textContent = productName;
    //     paragraph.textContent = productPrice;

    //     iconDivA.appendChild(iconA);
    //     iconDivB.appendChild(iconB);

    //     linkA.appendChild(iconDivA);
    //     linkB.appendChild(iconDivB);

    //     cardBodyDiv.appendChild(heading);
    //     cardBodyDiv.appendChild(paragraph);

    //     cardDiv.appendChild(img);
    //     cardDiv.appendChild(linkA);
    //     cardDiv.appendChild(linkB);
    //     cardDiv.appendChild(cardBodyDiv);

    //     parentElement.appendChild(cardDiv);
    // };

    // // FOR CAROUSEL A (PRODUCT GALLERY)
    // var carouselA = document.getElementById('carousel-A');
    // var productGallery = product.filter(x => x.categoryB === 'ready-to-wear');
    // // console.log(productGallery);
    // for (let i = 0; i < productGallery.length; i++) {
    //     template(carouselA, `${productGallery[i].url}`, `${productGallery[i].name}`, `$ ${productGallery[i].price}`);

    // }

    // console.log(carouselA);



    // // FOR CAROUSEL B (PRODUCT GALLERY)
    // var carouselB = document.getElementById('carousel-B');
    // var productGallery = product.filter(x => x.categoryB === 'bridal');
    // console.log(productGallery);
    // for (let i = 0; i < productGallery.length; i++) {
    //     template(carouselB, `${productGallery[i].url}`, `${productGallery[i].name}`, `$ ${productGallery[i].price}`);
    // }
    // // FOR CAROUSEL C (PRODUCT GALLERY)
    // var carouselC = document.getElementById('carousel-C');
    // var productGallery = product.filter(x => x.categoryB === 'bespoke');
    // console.log(productGallery);
    // for (let i = 0; i < productGallery.length; i++) {
    //     template(carouselC, `${productGallery[i].url}`, `${productGallery[i].name}`, `$ ${productGallery[i].price}`);
    // }

})