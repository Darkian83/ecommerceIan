function showModal(products) {
  let htmlModal = "";
  let productsDOM = document.querySelector(".products__container");
  productsDOM.addEventListener("click", function (e) {
    if (e.target.closest(".add--to--cart")) {
      const id = +e.target.closest(".add--to--cart").dataset.id;
      const productFinded = products.find((p) => p.id === id);
      htmlModal = ` <div class="modal">
      <h2 id="modal-title">${productFinded.name}</h2>
      <p id="modal-description">
        ${productFinded.description}
      </p>
        <img
            id="modal-image"
            src="${productFinded.image}"
            alt="${productFinded.name}"
        />
      <button id="modal-boton-carrito" class="add-to-cart-button">
        Agregar al Carrito
      </button>
      <button id="modal-boton-cerrar" class="close-modal-button">
        Cerrar
      </button>
    </div>`;
      document.querySelector(".modal-overlay").innerHTML = htmlModal;
    }
  });
}

export default showModal;
