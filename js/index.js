$(document).ready(function () {
    var product = [{
            id: 1,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_112555_0.jpg',
            categoryA: 'deckA',
            price: 5000

        },
        {
            id: 2,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_112614_0.jpg',
            categoryA: 'deckA',
            price: 5000

        },
        {
            id: 3,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_114001_0.jpg',
            categoryA: 'deckA',
            price: 5000

        },
        {
            id: 4,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_114119_0.jpg',
            categoryA: 'deckB',
            price: 5000

        },
        {
            id: 5,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_113946_0.jpg',
            categoryA: 'deckB',
            categoryB: '',
            price: 5000

        },
        {
            id: 6,
            name: 'Card title',
            url: './assets/img/product_images/cyma_fashion_style_20200307_114038_0.jpg',
            categoryA: 'deckB',
            categoryB: '',
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

    // FOR DECK A (HOMEPAGE)
    var deckA = document.getElementById('deck-A');
    var homePageProducts = product.filter(x => x.categoryA === 'deckA');
    // console.log(homePageProducts);
    for (let i = 0; i < homePageProducts.length; i++) {
        template(deckA, `${homePageProducts[i].url}`, `${homePageProducts[i].name}`, `$ ${homePageProducts[i].price}`);
    }

    // FOR DECK B (HOMEPAGE)
    var deckB = document.getElementById('deck-B');
    var homePageProducts = product.filter(x => x.categoryA === 'deckB');
    // console.log(homePageProducts);
    for (let i = 0; i < homePageProducts.length; i++) {
        template(deckB, `${homePageProducts[i].url}`, `${homePageProducts[i].name}`, `$ ${homePageProducts[i].price}`);
    }




})