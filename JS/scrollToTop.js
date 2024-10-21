const goToTopButton = document.getElementById("go-to-top-button");

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 10 ||
    document.documentElement.scrollTop > 10
  ) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
}
goToTopButton.addEventListener("click", () => {
  goToTopButton.style.display = "none";
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});