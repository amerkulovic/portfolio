const pictureBttn = document.querySelector(".picture");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const xBttn = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const keyPressEsc = function (esc) {
  if (esc.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
};

pictureBttn.addEventListener("click", openModal);

xBttn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", keyPressEsc);
