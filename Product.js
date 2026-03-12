const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const product = products.find(p => p.id === id);

const container = document.getElementById("product-details");

if(product){

container.innerHTML = `
<img src="${product.image}">
<h2>${product.name}</h2>
<p>Price: ₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>

`;

}