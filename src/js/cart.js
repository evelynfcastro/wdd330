import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  console.log(cartItems)

  let currentTotal = 0
  for (let i=0; i < cartItems.length; i++) {
    
    currentTotal += cartItems[i].ListPrice;
  };
  console.log("current")
  console.log(currentTotal)
  if (currentTotal > 0) {
    let cartTotal = document.querySelector(".cart-total")
    cartTotal.innerHTML = `Total: ${currentTotal}`
}
  }

  

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
