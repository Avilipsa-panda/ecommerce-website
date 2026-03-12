const urlParams = new URLSearchParams(window.location.search);

const productId = parseInt(urlParams.get("id"));

const product = products.find(p => p.id === productId);

document.getElementById("product-name").innerText = product.name;

document.getElementById("product-price").innerText = "₹" + product.price;

document.getElementById("product-image").src = product.image;