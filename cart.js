function displayCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");

let total = 0;

container.innerHTML="";

cart.forEach(item=>{

total += item.price * item.quantity;

container.innerHTML +=`

<div class="cart-item">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<p>Quantity: ${item.quantity}</p>

<button onclick="removeFromCart(${item.id})">
Remove
</button>

</div>

`;

});

document.getElementById("total-price").innerText="Total: ₹"+total;

}

function removeFromCart(id){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart = cart.filter(item => item.id !== id);

localStorage.setItem("cart", JSON.stringify(cart));

displayCart();

}

displayCart();

function displayCart() {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

if (!container) return;

container.innerHTML = "";

let total = 0;

cart.forEach(item => {

total += item.price * item.quantity;

container.innerHTML += `

<div class="cart-item">

<img src="${item.image}" width="80">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<div class="quantity">

<button onclick="decreaseQty(${item.id})">−</button>

<span>${item.quantity}</span>

<button onclick="increaseQty(${item.id})">+</button>

</div>

<button onclick="removeFromCart(${item.id})">Remove</button>

</div>

`;

});

totalPrice.innerText = "Total: ₹" + total;

}

function increaseQty(id){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach(item => {
if(item.id === id){
item.quantity += 1;
}
});

localStorage.setItem("cart", JSON.stringify(cart));

displayCart();
updateCartCount();

}


function decreaseQty(id){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach(item => {
if(item.id === id && item.quantity > 1){
item.quantity -= 1;
}
});

localStorage.setItem("cart", JSON.stringify(cart));

displayCart();
updateCartCount();

}