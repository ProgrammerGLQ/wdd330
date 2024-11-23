import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  let currentCart = getLocalStorage("so-cart") || []; // Initialize as empty array if null or undefined

  if (!Array.isArray(currentCart)) {
    // If currentCart is not an array (e.g., null or another type), initialize as an empty array
    currentCart = [];
  }

  currentCart.push(product);
  setLocalStorage("so-cart", currentCart);
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
