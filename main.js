// Update cart count
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = document.getElementById("cart-count");

  if (count) {
    count.innerText = cart.reduce((total, item) => total + item.quantity, 0);
  }
}

updateCartCount();


// Display products
function displayProducts(productList) {

  const container = document.getElementById("product-container");

  if (!container) return;

  container.innerHTML = "";

  productList.forEach(product => {

    container.innerHTML += `

    <div class="product-card">

      <img src="${product.image}" alt="${product.name}" onclick="viewProduct(${product.id})">

      <h3>${product.name}</h3>

      <p class="price">₹${product.price}</p>

      <p>⭐ ${product.rating || 4.5}</p>

      <div class="buttons">

        <button onclick="addToCart(${product.id})">
        🛒 Add to Cart
        </button>

        <button onclick="addToWishlist(${product.id})">
        ❤️ Wishlist
        </button>

      </div>

    </div>

    `;
  });

}


// Search
const searchInput = document.getElementById("search");

if (searchInput) {

  searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);

  });

}


// Sort Price
const sortPrice = document.getElementById("sortPrice");

if (sortPrice) {

  sortPrice.addEventListener("change", () => {

    let sorted = [...products];

    if (sortPrice.value === "low") {
      sorted.sort((a, b) => a.price - b.price);
    }

    if (sortPrice.value === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    displayProducts(sorted);

  });

}


// Add to Cart
function addToCart(id) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  showToast("Product added to cart 🛒");

}


// Add to Wishlist
function addToWishlist(id) {

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const product = products.find(p => p.id === id);

  wishlist.push(product);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  showToast("Added to Wishlist ❤️");

}


// Display Wishlist
function displayWishlist() {

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const container = document.getElementById("wishlist-items");

  if (!container) return;

  container.innerHTML = "";

  wishlist.forEach(item => {

    container.innerHTML += `

    <div class="product-card">

      <img src="${item.image}">

      <h3>${item.name}</h3>

      <p>₹${item.price}</p>

      <button onclick="addToCart(${item.id})">
      Add to Cart
      </button>

    </div>

    `;
  });

}

displayWishlist();
//////////////////
function displayWishlist(){

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const container = document.getElementById("wishlist-items");

if(!container) return;

container.innerHTML = "";

wishlist.forEach(item => {

container.innerHTML += `

<div class="product-card">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="addToCart(${item.id})">
Add to Cart 🛒
</button>

<button onclick="removeFromWishlist(${item.id})">
❌ Remove
</button>

</div>

`;

});

}

function removeFromWishlist(id){

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

wishlist = wishlist.filter(item => item.id !== id);

localStorage.setItem("wishlist", JSON.stringify(wishlist));

displayWishlist();

}

// Product page view
function viewProduct(id) {

  window.location.href = "product.html?id=" + id;

}


// Dark Mode
function toggleDarkMode() {

  document.body.classList.toggle("dark-mode");

}


// Toast message
function showToast(message) {

  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.innerText = message;

  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
  }, 2000);

}


// Load products initially
if (typeof products !== "undefined") {
  displayProducts(products);
}