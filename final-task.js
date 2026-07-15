// Task-1 Product Search

// let products = [
//     { title: "Laptop" },
//     { title: "Mouse" },
//     { title: "Keyboard" },
//     { title: "Monitor" },
//     { title: "Headphones" }
// ];
// function displayProducts(productArray) {

//     let output = "";

//     productArray.forEach((product) => {
//         output += `<p>${product.title}</p>`;
//     });

//     if (productArray.length === 0) {
//         output = "<h3>No Products Found</h3>";
//     }

//     document.getElementById("productList").innerHTML = output;
// }

// function searchProduct() {

//     let searchText = document
//         .getElementById("search")
//         .value
//         .toLowerCase();

//     let filteredProducts = products.filter((product) => {
//         return product.title.toLowerCase().includes(searchText);
//     });

//     displayProducts(filteredProducts);
// }
// displayProducts(products);

// Task-2 Category Filter

// let products = [
//     {
//         title: "Men T-Shirt",
//         category: "Men's Clothing"
//     },
//     {
//         title: "Women Dress",
//         category: "Women's Clothing"
//     },
//     {
//         title: "Gold Ring",
//         category: "Jewelery"
//     },
//     {
//         title: "Laptop",
//         category: "Electronics"
//     },
//     {
//         title: "Men Jeans",
//         category: "Men's Clothing"
//     },
//     {
//         title: "Necklace",
//         category: "Jewelery"
//     }
// ];

// function displayProducts(productArray) {

//     let result = "";

//     productArray.forEach((product) => {
//         result += `
//             <p>
//                 <b>${product.title}</b> -
//                 ${product.category}
//             </p>
//         `;
//     });

//     document.getElementById("productList").innerHTML = result;
// }

// function filterProducts(category) {

//     if (category === "All") {
//         displayProducts(products);
//         return;
//     }

//     let filteredProducts = products.filter((product) => {
//         return product.category === category;
//     });

//     displayProducts(filteredProducts);
// }

// displayProducts(products);

// Task-3 Price Sorting

// let products = [
//     {
//         title: "Laptop",
//         price: 55000
//     },
//     {
//         title: "Mouse",
//         price: 500
//     },
//     {
//         title: "Keyboard",
//         price: 1500
//     },
//     {
//         title: "Monitor",
//         price: 12000
//     }
// ];

// function displayProducts(productArray) {

//     let result = "";

//     productArray.forEach((product) => {

//         result += `
//             <p>
//                 ${product.title} - ₹${product.price}
//             </p>
//         `;

//     });

//     document.getElementById("productList").innerHTML = result;
// }

// function sortLowToHigh() {

//     let sortedProducts = [...products];

//     sortedProducts.sort((a, b) => a.price - b.price);

//     displayProducts(sortedProducts);

// }
// function sortHighToLow() {

//     let sortedProducts = [...products];

//     sortedProducts.sort((a, b) => b.price - a.price);

//     displayProducts(sortedProducts);

// }
// displayProducts(products);

// Task-4 Product Details Popup

// let products = [

// {
//     id:1,
//     title:"Laptop",
//     price:55000,
//     description:"High Performance Laptop",
//     category:"Electronics",
//     rating:4.8,
//     image:"https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp"
// },
// {
//     id:2,
//     title:"Headphones",
//     price:2500,
//     description:"Wireless Bluetooth Headphones",
//     category:"Electronics",
//     rating:4.5,
//     image:"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp"
// },

// {
//     id:3,
//     title:"Watch",
//     price:3000,
//     description:"Smart Watch",
//     category:"Accessories",
//     rating:4.2,
//     image:"https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp"
// }
// ];

// let productContainer = document.getElementById("productContainer");

// products.forEach((product)=>{

//     productContainer.innerHTML += `

//     <div class="card" data-id="${product.id}">

//         <img src="${product.image}" data-id="${product.id}">

//         <h3>${product.title}</h3>

//         <p>₹${product.price}</p>

//     </div>

//     `;

// });

// productContainer.addEventListener("click",(event)=>{

//     let id = event.target.dataset.id;

//     if(!id){
//         return;
//     }

//     let product = products.find((item)=>{

//         return item.id == id;

//     });

//     document.getElementById("modalImage").src = product.image;

//     document.getElementById("modalTitle").textContent = product.title;
//     document.getElementById("modalDescription").textContent = product.description;

//     document.getElementById("modalPrice").textContent = "Price : ₹" + product.price;

//     document.getElementById("modalRating").textContent = "Rating : " + product.rating;

//     document.getElementById("modalCategory").textContent = "Category : " + product.category;

//     document.getElementById("modal").style.display = "block";

// });

// document.getElementById("close").addEventListener("click",()=>{

//     document.getElementById("modal").style.display = "none";

// });

// Task-5 Shopping Cart

let products = [];
let cart = [];

fetch("https://dummyjson.com/products")

.then((response) => response.json())

.then((data) => {

    products = data.products;

    displayProducts();

});
function displayProducts(){

    let result = "";

    products.forEach((product)=>{

        result += `

        <div class="card">

            <img src="${product.thumbnail}">

            <h3>${product.title}</h3>

            <p>₹${product.price}</p>

            <button onclick="addToCart(${product.id})">Add To Cart</button>

        </div>

        `;

    });

    document.getElementById("products").innerHTML = result;

}
function addToCart(id){

    let index = cart.findIndex((item)=>{

        return item.id === id;

    });

    if(index !== -1){

        cart[index].quantity++;

    }

    else{

        let product = products.find((item)=>{

            return item.id === id;

        });
        cart.push({

            ...product,
            quantity:1

        });

    }

    displayCart();

}
function displayCart(){

    document.getElementById("cartCount").innerHTML =
    "Cart : " + cart.length;

    let result = "";

    cart.forEach((item)=>{

        result += `

        <tr>

            <td>${item.title}</td>

            <td>${item.quantity}</td>

            <td>₹${item.price * item.quantity}</td>

        </tr>
        `;

    });

    document.getElementById("cartTable").innerHTML = result;


    let grandTotal = cart.reduce((total,item)=>{

        return total + (item.price * item.quantity);

    },0);

    document.getElementById("grandTotal").innerHTML =
    "Grand Total : ₹" + grandTotal;

}