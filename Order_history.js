const orders = JSON.parse(localStorage.getItem("orders")) || [];

const container = document.getElementById("orderContainer");

if (orders.length === 0) {

container.innerHTML = "<p style='text-align:center'>No orders yet</p>";

} else {

orders.forEach(order => {

let itemsHTML = "";

if(order.items){

order.items.forEach(item => {

itemsHTML += `
<div class="order-item">

<img src="${item.image}" class="order-img">

<div class="order-details">
<h4>${item.name}</h4>
<p>₹${item.price}</p>
<p>Quantity: ${item.quantity}</p>
</div>

</div>
`;

});

}

const div = document.createElement("div");

div.className = "order-card";

div.innerHTML = `
<h3>Order ID: ${order.id}</h3>
<p class="order-date">Date: ${order.date}</p>

${itemsHTML}

<p class="order-total">Total: ₹${order.total}</p>
<p class="order-status">Status: ${order.status}</p>
`;

container.appendChild(div);

});

}