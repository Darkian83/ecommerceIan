import cart from "./components/cart.js";
import loader from "./components/loader.js";
import products from "./components/products.js";
import showCart from "./components/showCart.js";
import showMenu from "./components/showMenu.js";
import getProducts from "./helpers/getProducts.js";
import showModal from "./components/modal.js";
// import modalDescuento from "./components/modalDescuento.js";

/* UI Elements */

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// hidden loader
loader();

// show menu
showMenu();

// show cart
showCart();

/* End UI Elements */

// Products
const { db, printProducts } = products(await getProducts());

// Modal
showModal(db);

// Cart
cart(db, printProducts);
