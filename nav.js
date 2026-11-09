// Toggles the mobile menu with a class (no inline styles).
const toggle = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");

toggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("navbar__menu--open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});