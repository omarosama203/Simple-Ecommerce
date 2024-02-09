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


document.addEventListener("DOMContentLoaded", function() {
 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productName = urlParams.get('productName');
    
    const product = getProductByName(productName);

   
    displayProductInfo(product);
});


function getProductByName(productName) {
   
    for (const category in products) {
        const product = products[category].find(p => p.name.toLowerCase() === productName.toLowerCase());
        if (product) {
            return product;
        }
    }

    
    return null;
}


function displayProductInfo(product) {
    if (!product) {
        console.error("Product not found.");
        return;
    }

    document.getElementById("productName").textContent = product.name;
    document.getElementById("productPrice").textContent = product.price;
    document.getElementById("productProcessor").textContent = product.processor;
    document.getElementById("productBattery").textContent = product.Battery;
    document.getElementById("productRam").textContent = product.Ram;
}