const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-ul")[0];
const nameDiv = document.getElementsByClassName("name-anchor")[0];
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("display-none-sm");
  nameDiv.classList.toggle("display-none-sm");

});