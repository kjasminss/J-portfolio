const toTopButton = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    toTopButton.classList.add("show");
  } else {
    toTopButton.classList.remove("show");
  }
});