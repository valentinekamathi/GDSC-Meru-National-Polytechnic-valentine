// Sample product data (you should fetch this from a server in a real application)
const products = [
    {
        id: 1,
        name: "Elegant Necklace",
        price: 29.99,
        image: "necklace-image.jpg",
    },
    {
        id: 2,
        name: "Stylish Sunglasses",
        price: 19.99,
        image: "sunglasses-image.jpg",
    },
    // Add more product objects here
];

const cart = [];

const productsContainer = document.querySelector(".products");
const cartCount = document.getElementById("cart-count");

// Function to display products on the page
function displayProducts() {
    productsContainer.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const productToAdd = products.find(product => product.id == productId);
    cart.push(productToAdd);
    updateCartCount();
}

// Function to update the cart count in the header
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Add event listener for product click
productsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
        const productId = event.target.getAttribute("data-id");
        addToCart(productId);
    }
});

// Initialize the page
displayProducts();
updateCartCount();
