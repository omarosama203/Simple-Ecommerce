function updateCartCounter() {
    const cartCounter = document.getElementById("cartCounter");
    const cartItems = JSON.parse(getCookie("cart"));
    cartCounter.textContent = cartItems ? cartItems.length : 0;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}
window.addEventListener("DOMContentLoaded", () => {
    updateCartCounter();
});