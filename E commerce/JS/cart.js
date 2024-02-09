
function displayCart() {
    const cartContent = document.getElementById("cartContent");
    cartContent.innerHTML = ""; 

    
    const cartItems = JSON.parse(getCookie("cart"));

    if (cartItems && cartItems.length > 0) {
        cartItems.forEach(item => {
            
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            const productContainer = document.createElement("section");
            productContainer.classList.add("productcontainer1");
    
            const productInfo = document.createElement("section");
            productInfo.classList.add("productinfo");
    
            const productName = document.createElement("h1");
            productName.textContent = item.name;
    
            const hr1 = document.createElement("hr");
    
            const productImageContainer = document.createElement("section");
            productImageContainer.classList.add("productimage");
    
            const productImage = document.createElement("img");
            productImage.src = item.image;
            productImage.alt = item.name;
            
            const hr2 = document.createElement("hr");

            const productPrice = document.createElement("section");
            productPrice.classList.add("productprice");
    
            const priceParagraph = document.createElement("p");
            priceParagraph.textContent = `Price: ${item.price}`;
         

            
            const quantityInput = document.createElement("input");
            quantityInput.type = "number";
            quantityInput.value = item.quantity || 1; 
            quantityInput.min = 1;
            quantityInput.addEventListener("change", () => updateQuantity(item, parseInt(quantityInput.value)));
            quantityInput.classList.add("qunatity");
           

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";

            removeButton.addEventListener("click", () => removeItemFromCart(item)); 
            productInfo.appendChild(productName);
            productInfo.appendChild(hr1);
            productPrice.appendChild(priceParagraph); 
            productPrice.appendChild(removeButton) ;

            productImageContainer.appendChild(productImage);
            productContainer.appendChild(productInfo);
            productContainer.appendChild(productImageContainer);
            productContainer.appendChild(hr2);
            productContainer.appendChild(productPrice);
            productContainer.appendChild(quantityInput);


            itemElement.appendChild(productContainer);
            
            
            
            

            cartContent.appendChild(itemElement);
        });

   
    const totalPrice = cartItems.reduce((acc, item) => acc + parseInt(item.price.slice(1)) * (item.quantity || 1), 0); 
    const totalPriceElement = document.createElement("p");
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    totalPriceElement.classList.add("total-price-text"); 
    cartContent.appendChild(totalPriceElement);


        
        const checkoutButton = document.createElement("button");
        checkoutButton.textContent = "Checkout";
        checkoutButton.classList.add("checkout-button"); 
        checkoutButton.addEventListener("click", checkout);
        cartContent.appendChild(checkoutButton);
    } else {
        cartContent.innerHTML = "<p>Your cart is empty.</p>";
    }

    updateCartCounter(); 
}


function updateQuantity(item, quantity) {

    const cartItems = JSON.parse(getCookie("cart"));
    const index = cartItems.findIndex(cartItem => cartItem.name === item.name);
    if (index !== -1) {
       
        cartItems[index].quantity = quantity;
        
   
        const itemPrice = parseFloat(cartItems[index].price.slice(1)); 
        cartItems[index].totalPrice = itemPrice * quantity; 
        
        
        document.cookie = `cart=${JSON.stringify(cartItems)}; expires=Sun, 31 Dec 2026 23:59:59 UTC; path=/`;
        
        
        displayCart();
    }
}


function checkout() {
    
    document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    alert("Transaction done successfully!");
  
    displayCart();
}


function removeItemFromCart(itemToRemove) {
    let cartItems = JSON.parse(getCookie("cart"));

 
    const indexToRemove = cartItems.findIndex(item => item.name === itemToRemove.name);

    if (indexToRemove !== -1) {
       
        cartItems.splice(indexToRemove, 1);

        
        document.cookie = `cart=${JSON.stringify(cartItems)}; expires=Sun, 31 Dec 2026 23:59:59 UTC; path=/`;

        displayCart();
    }
}


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
document.addEventListener("DOMContentLoaded", function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) { 
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    });
});


window.addEventListener("DOMContentLoaded", () => {
    displayCart();
    updateCartCounter();
});
