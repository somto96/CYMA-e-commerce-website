$(document).ready(function () {
    // RETRIEVING PRODUCT DATA FROM LOCAL STORAGE
    var viewProducts = JSON.parse(localStorage.getItem("products") || "[]");
    // console.log('====================================');
    // console.log(viewProducts);
    // console.log('====================================');

    // RETRIEVING CART ITEMS FORM LOCAL STORAGE
    var viewCart = JSON.parse(localStorage.getItem("cart") || "[]");
    // console.log('====================================');
    // console.log(viewCart);
    // console.log('====================================');

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
        // console.log(badge);
        badge.textContent = viewCart.length;
        // console.log(viewCart.length);

    }
    //  else {
    //     console.log("No items in cart");
    // }


    // MOVES ITEMS SELECTED TO CART
    var createCart = (card) => {
        var cardNodes = card.childNodes
        // console.log(cardNodes);

        var image = cardNodes[1];
        var cartLink = cardNodes[3];
        // var viewLink = cardNodes[5];

        var productId = Number(image.classList[1]);

        // OBJECT TO STORE EACH ITEM SELECTED BEFORE PUSHING INTO viewCart
        var itemObject = {};
        cartLink.addEventListener('click', (e) => {
            // FILTERING OUT REQUIRED DATA FROM LOCAL STORAGE
            var productObject = viewProducts.filter(x => x.id === productId);
            // console.log(productObject);

            itemObject.image = productObject[0].url;
            itemObject.name = productObject[0].name;
            itemObject.price = Number(productObject[0].price);
            itemObject.quantity = 1;

            // cartItems.push(itemA);
            // console.log('====================================');
            // console.log(itemObject);
            // console.log('====================================');
            alert(`${itemObject.name} added!`)

            cartTemplate(itemObject);

            viewCart.push(itemObject);

            // console.log(viewCart);

            badge.textContent = viewCart.length;

            // STORING CART ITEMS IN LOCAL STORAGE
            localStorage.setItem("cart", JSON.stringify(viewCart));
        })

    }

    // CREATING MODAL
    var productModal = (img, nameTag) => {

        // FILTERING OUT SELECTED ITEM
        var productId = Number(img.classList[1]);

        var productObject = viewProducts.filter(x => x.id === productId);
        // console.log(productObject);


        var divModalDialog = document.createElement('div');

        var divModalContent = document.createElement('div');

        // MODAL CONTENT => MODAL HEADER
        var divModalHeader = document.createElement('div');
        var h5ModalTitle = document.createElement('h5');
        var headerButton = document.createElement('button');
        var headerSpan = document.createElement('span');

        // MODAL CONTENT => MODAL BODY
        var divModalBody = document.createElement('div');
        var bodyRow = document.createElement('div');
        var imgCol = document.createElement('div');
        var bodyImage = new Image();
        var textCol = document.createElement('div');
        var bodyDescription = document.createElement('p');
        var bodyPrice = document.createElement('p');

        // MODAL BODY => MODAL FORM
        var bodyForm = document.createElement('form');
        var bodyFormDivA = document.createElement('div');
        var bodyFormLabelA = document.createElement('label');
        var bodyFormInput = document.createElement('input');
        var bodyFormDivB = document.createElement('div');
        var bodyFormLabelB = document.createElement('label');
        var bodyFormSelect = document.createElement('select');
        var bodySelectOptionA = document.createElement('option');
        var bodySelectOptionB = document.createElement('option');
        var bodySelectOptionC = document.createElement('option');
        var bodySelectOptionD = document.createElement('option');
        var bodySelectOptionE = document.createElement('option');

        // MODAL CONTENT => MODAL FOOTER
        var divModalFooter = document.createElement('div');
        var submitBtn = document.createElement('button');

        // ATTRIBUTES

        divModalDialog.classList.add('modal-dialog', 'modal-dialog-centered');
        divModalDialog.setAttribute('role', 'document');

        divModalContent.classList.add('modal-content');

        divModalHeader.setAttribute('class', 'modal-header');
        h5ModalTitle.classList.add('modal-title', 'text-center');
        h5ModalTitle.setAttribute('id', 'product-modal-title');
        h5ModalTitle.textContent = `${productObject[0].name}`;
        headerButton.classList.add('close');
        headerButton.setAttribute('data-dismiss', 'modal');
        headerButton.setAttribute('aria-label', 'Close');
        headerSpan.setAttribute('aria-hidden', 'true');
        headerSpan.innerHTML = '&times;'

        divModalBody.setAttribute('class', 'modal-body');
        bodyRow.setAttribute('class', 'row');
        imgCol.classList.add('col-md-6', 'img-col', 'text-center', 'mb-3');
        bodyImage.src = `${ productObject[0].url}`;
        bodyImage.setAttribute('class', 'product-img');
        bodyImage.alt = 'Product';
        textCol.classList.add('col-md-6', 'text-col');
        bodyDescription.setAttribute('id', 'product-description');
        bodyDescription.textContent = `${productObject[0].description}`;
        bodyPrice.setAttribute('id', 'product-price');
        bodyPrice.textContent = `$${productObject[0].price}`;

        bodyForm.setAttribute('class', 'product-specs');
        bodyForm.setAttribute('id', 'form');
        bodyFormDivA.setAttribute('class', 'form-group');
        bodyFormLabelA.textContent = 'Quantity';
        bodyFormLabelA.setAttribute('for', 'quantity');
        bodyFormInput.setAttribute('class', 'form-control');
        bodyFormInput.setAttribute('type', 'number');
        bodyFormInput.setAttribute('required', true);
        bodyFormInput.setAttribute('id', 'quantity');
        bodyFormInput.setAttribute('min', '1');
        bodyFormInput.required = true;

        bodyFormDivB.setAttribute('class', 'form-group');
        bodyFormLabelB.setAttribute('for', 'inputSize');
        bodyFormLabelB.textContent = 'Size';
        bodyFormSelect.setAttribute('id', 'inputSize');
        bodyFormSelect.setAttribute('class', 'form-control');
        bodyFormSelect.required = true;
        bodySelectOptionA.selected = true;
        bodySelectOptionA.value = 'Choose...';
        bodySelectOptionA.textContent = 'Choose...';
        bodySelectOptionB.value = 'small';
        bodySelectOptionB.textContent = 'Small';
        bodySelectOptionC.value = 'large';
        bodySelectOptionC.textContent = 'Large';
        bodySelectOptionD.value = 'extra-large';
        bodySelectOptionD.textContent = 'Extra Large';
        bodySelectOptionE.value = 'double-extra-large';
        bodySelectOptionE.textContent = 'Double Extra large';

        divModalFooter.setAttribute('class', 'modal-footer');
        submitBtn.classList.add('btn', 'btn-primary');
        submitBtn.setAttribute('id', 'submit-btn');
        submitBtn.textContent = 'Add to Cart';

        // LINKING MODAL HEADER ELEMENTS
        headerButton.appendChild(headerSpan);
        divModalHeader.appendChild(h5ModalTitle);
        divModalHeader.appendChild(headerButton);

        // LINKING MODAL BODY ELEMENTS
        imgCol.appendChild(bodyImage);
        bodyFormSelect.appendChild(bodySelectOptionA);
        bodyFormSelect.appendChild(bodySelectOptionB);
        bodyFormSelect.appendChild(bodySelectOptionC);
        bodyFormSelect.appendChild(bodySelectOptionD);
        bodyFormSelect.appendChild(bodySelectOptionE);


        bodyFormDivA.appendChild(bodyFormLabelA);
        bodyFormDivA.appendChild(bodyFormInput);
        bodyFormDivB.appendChild(bodyFormLabelB);
        bodyFormDivB.appendChild(bodyFormSelect);
        bodyForm.appendChild(bodyFormDivA);
        bodyForm.appendChild(bodyFormDivB);

        textCol.appendChild(bodyDescription);
        textCol.appendChild(bodyPrice);
        textCol.appendChild(bodyForm);

        bodyRow.appendChild(imgCol);
        bodyRow.appendChild(textCol);
        divModalBody.appendChild(bodyRow);

        // LINKING MODAL FOOTER ELEMENTS
        divModalFooter.appendChild(submitBtn);

        // LINKING ALL ELEMENTS
        divModalContent.appendChild(divModalHeader);
        divModalContent.appendChild(divModalBody);
        divModalContent.appendChild(divModalFooter);
        divModalDialog.appendChild(divModalContent);

        // Targeting parent modal divs
        var productModalA1 = document.getElementById('product-modal-A1');
        var productModalA2 = document.getElementById('product-modal-A2');
        var productModalA3 = document.getElementById('product-modal-A3');
        var productModalA4 = document.getElementById('product-modal-A4');
        var productModalB1 = document.getElementById('product-modal-B1');
        var productModalB2 = document.getElementById('product-modal-B2');
        var productModalB3 = document.getElementById('product-modal-B3');
        var productModalB4 = document.getElementById('product-modal-B4');
        var productModalC1 = document.getElementById('product-modal-C1');
        var productModalC2 = document.getElementById('product-modal-C2');
        var productModalC3 = document.getElementById('product-modal-C3');
        var productModalC4 = document.getElementById('product-modal-C4');

        // SETTING CONDITIONS FOR CLICK EVENT
        if (nameTag === 'A1') {
            productModalA1.appendChild(divModalDialog);
        } else if (nameTag === 'A2') {
            productModalA2.appendChild(divModalDialog);
        } else if (nameTag === 'A3') {
            productModalA3.appendChild(divModalDialog);
        } else if (nameTag === 'A4') {
            productModalA4.appendChild(divModalDialog);
        } else if (nameTag === 'B1') {
            productModalB1.appendChild(divModalDialog);
        } else if (nameTag === 'B2') {
            productModalB2.appendChild(divModalDialog);
        } else if (nameTag === 'B3') {
            productModalB3.appendChild(divModalDialog);
        } else if (nameTag === 'B4') {
            productModalB4.appendChild(divModalDialog);
        } else if (nameTag === 'C1') {
            productModalC1.appendChild(divModalDialog);
        } else if (nameTag === 'C2') {
            productModalC2.appendChild(divModalDialog);
        } else if (nameTag === 'C3') {
            productModalC3.appendChild(divModalDialog);
        } else if (nameTag === 'C4') {
            productModalC4.appendChild(divModalDialog);
        }


        // FORM SUBMISSION AND HANDLING
        submitBtn.addEventListener('click', (e) => {
            if (bodyFormInput !== null && !bodySelectOptionA.selected){
                e.preventDefault();
                var quantity = document.getElementById('quantity');
                // console.log(quantity.value);
    
                var size = document.getElementById('inputSize');
                // console.log(size.value);
                var itemObject = {}
                itemObject.image = productObject[0].url;
                itemObject.quantity = Number(quantity.value);
                itemObject.name = productObject[0].name;
                itemObject.price = Number(productObject[0].price);
                itemObject.size = size.value;
    
                // console.log('====================================');
                // console.log(itemObject);
                // console.log('====================================');
                alert(`${itemObject.name} added to cart!`);
                cartTemplate(itemObject);
    
                viewCart.push(itemObject);
    
                // console.log(viewCart);
    
                var badge = document.querySelector('#cart-length');
                badge.textContent = viewCart.length;
    
                // STORING CART ITEMS IN LOCAL STORAGE
                localStorage.setItem("cart", JSON.stringify(viewCart));
            }else {
                alert(`Please fill all required fields!`)
            }
           

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


    // VIEW MODAL FUNCTION
    var viewModal = (element, imgUrl, nameTag) => {
        element.addEventListener('click', (e) => {
            //  LAUNCH PRODUCT VIEW MODAL
            productModal(imgUrl, nameTag);
        })
    }

    // CAROUSEL A (VIEW ICON FUNCTION)
    var viewLinkA1 = document.getElementById("view-linkA1");
    var viewLinkA2 = document.getElementById("view-linkA2");
    var viewLinkA3 = document.getElementById("view-linkA3");
    var viewLinkA4 = document.getElementById("view-linkA4");

    var imgA1 = cardA1.childNodes[1]
    var imgA2 = cardA2.childNodes[1]
    var imgA3 = cardA3.childNodes[1]
    var imgA4 = cardA4.childNodes[1]

    // console.log(imgA1);
    // console.log(imgA2);
    // console.log(imgA3);
    // console.log(imgA4);

    viewModal(viewLinkA1, imgA1, 'A1');
    viewModal(viewLinkA2, imgA2, 'A2');
    viewModal(viewLinkA3, imgA3, 'A3');
    viewModal(viewLinkA4, imgA4, 'A4');

    //  CAROUSEL B (VIEW ICON FUNCTION)
    var viewLinkB1 = document.getElementById("view-linkB1");
    var viewLinkB2 = document.getElementById("view-linkB2");
    var viewLinkB3 = document.getElementById("view-linkB3");
    var viewLinkB4 = document.getElementById("view-linkB4");

    var imgB1 = cardB1.childNodes[1]
    var imgB2 = cardB2.childNodes[1]
    var imgB3 = cardB3.childNodes[1]
    var imgB4 = cardB4.childNodes[1]

    viewModal(viewLinkB1, imgB1, 'B1');
    viewModal(viewLinkB2, imgB2, 'B2');
    viewModal(viewLinkB3, imgB3, 'B3');
    viewModal(viewLinkB4, imgB4, 'B4');

    //  CAROUSEL C (VIEW ICON FUNCTION)
    var viewLinkC1 = document.getElementById("view-linkC1");
    var viewLinkC2 = document.getElementById("view-linkC2");
    var viewLinkC3 = document.getElementById("view-linkC3");
    var viewLinkC4 = document.getElementById("view-linkC4");

    var imgC1 = cardC1.childNodes[1]
    var imgC2 = cardC2.childNodes[1]
    var imgC3 = cardC3.childNodes[1]
    var imgC4 = cardC4.childNodes[1]

    viewModal(viewLinkC1, imgC1, 'C1');
    viewModal(viewLinkC2, imgC2, 'C2');
    viewModal(viewLinkC3, imgC3, 'C3');
    viewModal(viewLinkC4, imgC4, 'C4');

})