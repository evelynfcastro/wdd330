
import ProductData from "./ProductData.mjs";
import { setLocalStorage, getParam } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");
const product = new ProductDetails(productId, dataSource);
product.init();

function addProductToCart(product) {


  const cartItems = getLocalStorage("so-cart");

  // If cartItems is not an array, initialize it as an empty array
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }

  // Add the new product to the cartItems array
  cartItems.push(product);

  // Save the updated cartItems back to localStorage
  setLocalStorage("so-cart", cartItems);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product); 
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
