let slideIndex = 0;
let slideInterval;

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = "block";
}

function moveSlide(n) {
    clearInterval(slideInterval);
    showSlide(n);
    slideInterval = setInterval(() => showSlide(1), 2000); 
}


moveSlide(0);
document.addEventListener("DOMContentLoaded", function() {
    
    showAllProducts();
});

const products = {
    phones: [
        { name: "Samsung S23 Ultra", price: "$500", image: "../images/71q+njLKksL._AC_SL1500_.jpg",processor:"Dimensity 9300",Battery:"5000 mah",Ram:"4 GB" },
        { name: "Iphone 13", price: "$600", image: "../images/iphone13.jpg",processor:"Snapdragon 8 Gen 3",Battery:"6000 mah",Ram:"6 GB" },
        { name: "Iphone 14", price: "$700", image: "../images/iphone14pro.jpg",processor:"A16 Bionic",Battery:"4000 mah",Ram:"8 GB" },
        { name: "Iphone 11", price: "$800", image: "../images/iphone11.jpg",processor:"A16 Bionic",Battery:"5000 mah",Ram:"4 GB" },
        { name: "Redmi 13C", price: "$900", image: "../images/redmi13c.jpg",processor:"Snapdragon 8 Gen 3",Battery:"5000 mah",Ram:"6 GB" }
    ],
    tablets: [
        { name: "Lenovo Tablets", price: "$400", image: "../images/Lenovo tab.jpg",processor:"Dimensity 9200",Battery:"5000 mah",Ram:"8 GB" },
        { name: "Galaxy Tab A9", price: "$450", image: "../images/galaxy tab a9.jpg",processor:"A16 Bionic",Battery:"4000 mah",Ram:"6 GB" },
        { name: "Google Pixel Tablet", price: "$500", image: "../images/googlepixeltablet.jpg",processor:"Snapdragon 8 Gen 3",Battery:"6000 mah",Ram:"6 GB"},
        { name: "Realme Tablet", price: "$550", image: "../images/Realme tab.jpg",processor:"",Battery:"5000 mah",Ram:"8 GB" },
        { name: "Apple Tablet", price: "$600", image: "../images/Appletab.jpg",processor:"Snapdragon 8 Gen 3",Battery:"5000 mah",Ram:"8 GB" }
    ],
    laptops: [
        { name: "Asus Rog", price: "$800", image: "../images/asus rog.jpg",processor:"Amd ryzen 9",Battery:"Up to 4 hours",Ram:"16 GB" },
        { name: "Asus TUF", price: "$900", image: "../images/asus tuf.jpg",processor:"Amd Ryzen 7 3750H",Battery:"Up to 2 hours",Ram:"32 GB" },
        { name: "Dell Vostro", price: "$1000", image: "../images/DellVostro.jpg",processor:"",Battery:"Up to 8 hours",Ram:"8 GB"},
        { name: "HP Pavillion", price: "$1100", image: "../images/Hp pavillion.jpg",processor:"Intel core I7 ",Battery:"Up to 4 hours",Ram:"8 GB" },
        { name: "Lenovo V15", price: "$1200", image: "../images/Lenovo V15.jpg",processor:"Intel core I5",Battery:"Up to 6 hours",Ram:"32 GB" }
    ]
};

let cart = [];
function readCartFromCookie() {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('cart='))
        ?.split('=')[1];
    return cookieValue ? JSON.parse(cookieValue) : [];
}

function updateCartCounter() {
    const cartCounter = document.getElementById("cartCounter");
    cartCounter.textContent = cart.length;
}

window.addEventListener("DOMContentLoaded", function() {
    cart = readCartFromCookie();
    updateCartCounter();
});
function addToCart(product) {
    cart.push(product); 
    console.log("Product added to cart:", product);
    updateCart(); 
    updateCartCounter(); 

    
    alert("Item has been added to the cart.");
}


function updateCart() {
    
    document.cookie = `cart=${JSON.stringify(cart)}; expires=Sun, 31 Dec 2026 23:59:59 UTC; path=/`;
}

function handleMoreInfoClick(product) {
   
    window.location.href = `moreinfo.html?productName=${encodeURIComponent(product.name)}`;
}
function showAllProducts() {
    const allProducts = Object.values(products).flatMap(category => category);
    showProducts(allProducts);
}

function showProducts(productsToShow) {
    const productDisplay = document.getElementById("productDisplay");
    productDisplay.innerHTML = ""; 

    productsToShow.forEach(product => {
        const productContainer = document.createElement("section");
        productContainer.classList.add("productcontainer1");

        const productInfo = document.createElement("section");
        productInfo.classList.add("productinfo");

        const productName = document.createElement("h1");
        productName.textContent = product.name;

        const hr1 = document.createElement("hr");

        const productImageContainer = document.createElement("section");
        productImageContainer.classList.add("productimage");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const hr2 = document.createElement("hr");

        const productPrice = document.createElement("section");
        productPrice.classList.add("productprice");

        const priceParagraph = document.createElement("p");
        priceParagraph.textContent = `Price: ${product.price}`;

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        const moreInfroButton = document.createElement("button");
        moreInfroButton.classList.add("more-info");
        moreInfroButton.textContent = "More Info";
        moreInfroButton.addEventListener("click", () => handleMoreInfoClick(product));

        addToCartButton.addEventListener("click", () => addToCart(product));

        productInfo.appendChild(productName);
        productInfo.appendChild(hr1);

        productImageContainer.appendChild(productImage);

        productPrice.appendChild(priceParagraph);
        productPrice.appendChild(addToCartButton);
        productPrice.appendChild(moreInfroButton);

        productContainer.appendChild(productInfo);
        productContainer.appendChild(productImageContainer);
        productContainer.appendChild(hr2);
        productContainer.appendChild(productPrice);

        productDisplay.appendChild(productContainer);
    });
}

function showProducts2(category) {
    const productList = products[category];
    const productDisplay = document.getElementById("productDisplay");
    productDisplay.innerHTML = ""; 

    productList.forEach(product => {
        const productContainer = document.createElement("section");
        productContainer.classList.add("productcontainer1");

        const productInfo = document.createElement("section");
        productInfo.classList.add("productinfo");

        const productName = document.createElement("h1");
        productName.textContent = product.name;

        const hr1 = document.createElement("hr");

        const productImageContainer = document.createElement("section");
        productImageContainer.classList.add("productimage");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const hr2 = document.createElement("hr");

        const productPrice = document.createElement("section");
        productPrice.classList.add("productprice");

        const priceParagraph = document.createElement("p");
        priceParagraph.textContent = `Price: ${product.price}`;

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        const moreInfroButton = document.createElement("button");
        moreInfroButton.classList.add("more-info");
        moreInfroButton.textContent = "More Info";
        moreInfroButton.addEventListener("click", () => handleMoreInfoClick(product));

        addToCartButton.addEventListener("click", () => addToCart(product));

        productInfo.appendChild(productName);
        productInfo.appendChild(hr1);

        productImageContainer.appendChild(productImage);

        productPrice.appendChild(priceParagraph);
        productPrice.appendChild(addToCartButton);
        productPrice.appendChild(moreInfroButton);

        productContainer.appendChild(productInfo);
        productContainer.appendChild(productImageContainer);
        productContainer.appendChild(hr2);
        productContainer.appendChild(productPrice);

        productDisplay.appendChild(productContainer);
    });
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


window.addEventListener("DOMContentLoaded", updateCartCounter);
