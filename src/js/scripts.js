const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

function showMobileMenu() {
  hamburger.classList.toggle("header__nav-menu-btn_active");
  navMenu.classList.toggle("header__nav-list_active");
}

hamburger.addEventListener("click", showMobileMenu);

// MODAL

const modal = document.querySelector("#modal");

function hideModal() {
  modal.style.display = "none";
}

window.addEventListener("click", hideModal);
