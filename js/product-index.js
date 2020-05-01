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

    var productRow = document.getElementById('product-row');

    // imgCol
    var imgCol = productRow.childNodes[1];
    var imgUrl = imgCol.childNodes[1].src;
   
    // Image path/URL
    var requiredPath = imgUrl.slice(22);
    console.log(requiredPath);
   

    var productObject = viewProducts.filter(x => x.url === requiredPath);
    console.log(productObject);

    var productName = document.getElementById('product-name');
    var productDescription = document.getElementById('product-description');
    var productPrice = document.getElementById('product-price');

    productName.textContent = `${productObject[0].name}`;
    productDescription.textContent = `${productObject[0].description}`;
    productPrice.textContent = `$${productObject[0].price}`;

    var submitBtn = document.getElementById("submit-btn");
    

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        var quantity = document.getElementById('quantity');
        console.log(quantity.value);
        
        var size = document.getElementById('inputSize');
        console.log(size.value);
        var itemObject = {}
        itemObject.image = productObject[0].url;
        itemObject.quantity = Number(quantity.value);
        itemObject.name = productObject[0].name;
        itemObject.price = Number(productObject[0].price);

        console.log('====================================');
        console.log(itemObject);
        console.log('====================================');
        alert(`${itemObject.name} added!`);
        cartTemplate(itemObject);

        viewCart.push(itemObject);

        console.log(viewCart);

        var badge = document.querySelector('#cart-length');
        badge.textContent = viewCart.length;

        // STORING CART ITEMS IN LOCAL STORAGE
        localStorage.setItem("cart", JSON.stringify(viewCart));

    })




})