var product = [{
        id: 1,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_112555_0.jpg',
        categoryA: 'deckA',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },
    {
        id: 2,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_112614_0.jpg',
        categoryA: 'deckA',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },
    {
        id: 3,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_114001_0.jpg',
        categoryA: 'deckA',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'
    },
    {
        id: 4,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_114119_0.jpg',
        categoryA: 'deckB',
        categoryB: 'bespoke',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'
    },
    {
        id: 5,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_113946_0.jpg',
        categoryA: 'deckB',
        categoryB: 'bespoke',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'
    },
    {
        id: 6,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_114038_0.jpg',
        categoryA: 'deckB',
        categoryB: '',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },

    // NEW COLLECTIONS
    {
        id: 7,
        name: 'Card title',
        url: './assets/img/product_images/@capitalhaykayphotography_(14).JPG',
        categoryA: 'new-collections',
        categoryB: 'ready-to-wear',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },
    {
        id: 8,
        name: 'Card title',
        url: './assets/img/product_images/@capitalhaykayphotography_(18).JPG',
        categoryA: 'new-collections',
        categoryB: 'ready-to-wear',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },
    {
        id: 9,
        name: 'Card title',
        url: './assets/img/product_images/@capitalhaykayphotography_(8).JPG',
        categoryA: 'new-collections',
        categoryB: 'ready-to-wear',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },
    {
        id: 10,
        name: 'Card title',
        url: './assets/img/product_images/@capitalhaykayphotography_(9).JPG',
        categoryA: 'new-collections',
        categoryB: 'ready-to-wear',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'
    },

    // HOT COLLECTIONS
    {
        id: 11,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_112341_0.jpg',
        categoryA: 'hot-collections',
        categoryB: 'bespoke',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },
    {
        id: 12,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_112438_0.jpg',
        categoryA: 'hot-collections',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },

    {
        id: 13,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_112521_0.jpg',
        categoryA: 'hot-collections',
        categoryB: 'bridal',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },
    {
        id: 14,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_112544_0.jpg',
        categoryA: 'hot-collections',
        categoryB: 'bridal',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },

   
    // BRIDAL

    {
        id: 15,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_114922_0.jpg',
        categoryB: 'bridal',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },
    {
        id: 16,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_114644_0.jpg',
        categoryB: 'bridal',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },

    // BESPOKE
   
    {
        id: 17,
        name: 'Card title',
        url: './assets/img/product_images/cyma_fashion_style_20200307_114830_0.jpg',
        categoryB: 'bespoke',
        price: 5000,
        quantity: 1,
        description: 'Lorem Ipsum'

    },


];

// var cart = [];

var storeProducts = localStorage.setItem("products", JSON.stringify(product));
// window.onunload = function () {
//     localStorage.removeItem('cart');
//     return '';
// };

// var cartItems = localStorage.setItem("cart", JSON.stringify(cart));
// var viewProducts = JSON.parse(localStorage.getItem("products") || "[]");
// console.log(viewProducts);