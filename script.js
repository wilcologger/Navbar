let hamburger = document.querySelector(".hamburger");
let body = document.querySelector(".page-body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  body.classList.toggle("navbar-open");
});
