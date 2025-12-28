// Menu mobile
const menuBtn = document.querySelector(".header__menu");

menuBtn.addEventListener("click", () => {
  const menuMobile = document.querySelector(".header__nav__mobile");

  menuMobile.classList.toggle("header__nav__mobile--active");
});
