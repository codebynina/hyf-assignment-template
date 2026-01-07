console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const ul = document.querySelector("#product-list");
  ul.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
  <h2>${product.name}</h2>
  <div class="product-data">
    <span class="price">💰 ${product.price} DKK</span>
    <span class="rating">⭐ ${product.rating}/10</span>
  </div>
`;
    ul.appendChild(li);
  });
}

renderProducts(products);
