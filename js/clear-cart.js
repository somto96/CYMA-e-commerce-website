// CODE FOR CLEARING CART AND LOCAL STORAGE DATA
var clearCart = document.getElementById('clear-cart');
clearCart.addEventListener('click', (e) => {
    localStorage.removeItem('cart');
    location.reload(true);
    var badge = document.querySelector('#cart-length');
    badge.textContent = 0;
})
