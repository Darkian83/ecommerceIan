// const showModalBtn = document.getElementById("showModalBtn");
// const closeModal = document.getElementById("closeModal");
// const discountModal = document.getElementById("discountModal");

// showModalBtn.addEventListener("click", () => {
//   discountModal.style.display = "flex";
// });

// closeModal.addEventListener("click", () => {
//   discountModal.style.display = "none";
// });

// window.addEventListener("click", (event) => {
//   if (event.target === discountModal) {
//     discountModal.style.display = "none";
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const closeModal = document.getElementById("closeModal");
  const discountModal = document.getElementById("discountModal");

  discountModal.style.display = "flex";

  closeModal.addEventListener("click", function () {
    discountModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === discountModal) {
      discountModal.style.display = "none";
    }
  });
});
