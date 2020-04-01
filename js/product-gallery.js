$(document).ready(function () {
    var product = [

        // READY TO WEAR
        {
            id: 1,
            name: 'Card title',
            url: './assets/img/product_images/@capitalhaykayphotography (14).JPG',
            categoryB: 'ready-to-wear',
            price: 5000

        },
        {
            id: 2,
            name: 'Card title',
            url: './assets/img/product_images/@capitalhaykayphotography (18).JPG',
            categoryB: 'ready-to-wear',
            price: 5000

        },
        {
            id: 3,
            name: 'Card title',
            url: './assets/img/product_images/@capitalhaykayphotography (8).JPG',
            categoryB: 'ready-to-wear',
            price: 5000

        },
        {
            id: 4,
            name: 'Card title',
            url: './assets/img/product_images/@capitalhaykayphotography (9).JPG',
            categoryB: 'ready-to-wear',
            price: 5000

        },

        // BRIDAL
        {
            id: 5,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_112521_0.jpg',
            categoryB: 'bridal',
            price: 5000

        },
        {
            id: 6,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_112544_0.jpg',
            categoryB: 'bridal',
            price: 5000

        },
        {
            id: 7,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_114922_0.jpg',
            categoryB: 'bridal',
            price: 5000

        },
        {
            id: 8,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_114644_0.jpg',
            categoryB: 'bridal',
            price: 5000

        },

        // BESPOKE
        {
            id: 9,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_112341_0.jpg',
            categoryB: 'bespoke',
            price: 5000

        },
        {
            id: 10,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_113946_0.jpg',
            categoryB: 'bespoke',
            price: 5000

        },
        {
            id: 11,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_114119_0.jpg',
            categoryB: 'bespoke',
            price: 5000

        },
        {
            id: 12,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_114830_0.jpg',
            categoryB: 'bespoke',
            price: 5000

        },

       

    ];

    var template = (parentElement, imgUrl, productName, productPrice) => {
        var cardDiv = document.createElement('div');
        var img = new Image(); // Create new img element
        var linkA = document.createElement('a');
        var linkB = document.createElement('a');
        var iconDivA = document.createElement('div');
        var iconDivB = document.createElement('div');
        var cardBodyDiv = document.createElement('div');
        var heading = document.createElement('h5');
        var paragraph = document.createElement('p');
        var iconA = document.createElement('i');
        var iconB = document.createElement('i');

        cardDiv.classList.add('card');
        img.setAttribute('class', 'card-img-top');
        iconDivA.classList.add('cart-icon', 'text-center');
        iconDivB.classList.add('view-icon', 'text-center');
        iconA.classList.add('fas', 'fa-shopping-cart');
        iconB.classList.add('far', 'fa-eye');
        cardBodyDiv.classList.add('card-body', 'text-center');
        heading.classList.add('card-title');
        paragraph.classList.add('card-text');

        img.src = imgUrl;
        heading.textContent = productName;
        paragraph.textContent = productPrice;

        iconDivA.appendChild(iconA);
        iconDivB.appendChild(iconB);

        linkA.appendChild(iconDivA);
        linkB.appendChild(iconDivB);

        cardBodyDiv.appendChild(heading);
        cardBodyDiv.appendChild(paragraph);

        cardDiv.appendChild(img);
        cardDiv.appendChild(linkA);
        cardDiv.appendChild(linkB);
        cardDiv.appendChild(cardBodyDiv);

        parentElement.appendChild(cardDiv);
    };

    // FOR CAROUSEL A (PRODUCT GALLERY)
    var carouselA = document.getElementById('carousel-A');
    var productGallery = product.filter(x => x.categoryB === 'ready-to-wear');
    // console.log(productGallery);
    for (let i = 0; i < productGallery.length; i++) {
        template(carouselA, `${productGallery[i].url}`, `${productGallery[i].name}`, `$ ${productGallery[i].price}`);
    }

    // FOR CAROUSEL B (PRODUCT GALLERY)
    var carouselB = document.getElementById('carousel-B');
    var productGallery = product.filter(x => x.categoryB === 'bridal');
    console.log(productGallery);
    for (let i = 0; i < productGallery.length; i++) {
        template(carouselB, `${productGallery[i].url}`, `${productGallery[i].name}`, `$ ${productGallery[i].price}`);
    }
    // FOR CAROUSEL C (PRODUCT GALLERY)
    var carouselC = document.getElementById('carousel-C');
    var productGallery = product.filter(x => x.categoryB === 'bespoke');
    console.log(productGallery);
    for (let i = 0; i < productGallery.length; i++) {
        template(carouselC, `${productGallery[i].url}`, `${productGallery[i].name}`, `$ ${productGallery[i].price}`);
    }
})