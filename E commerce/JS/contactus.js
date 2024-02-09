document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const messageContainer = document.getElementById('message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const inquiryInput = document.getElementById('inquiry');

        
        const nameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
        if (!nameRegex.test(nameInput.value.trim())) {
            showMessage('Please enter your name in the correct format (e.g., Omar Osama)');
            return;
        }

      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showMessage('Please enter a valid email address');
            return;
        }

       
        showMessage('We will contact you soon!', 'success');
        
       
        contactForm.reset();
    });

    function showMessage(message, messageType = 'error') {
        messageContainer.textContent = message;
        messageContainer.className = messageType === 'success' ? 'success' : 'error';
     
    }
});
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