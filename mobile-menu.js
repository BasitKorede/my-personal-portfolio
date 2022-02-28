const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-ul")[0];
const navLinks = document.querySelectorAll(".nav-ul-li");
toggleButton.addEventListener("click", () => {
  let toggleOpen = false;

  if (!toggleOpen) {
    toggleButton.classList.add("open");
    toggleOpen = true;
  } else {
    toggleButton.classList.remove("open");
    toggleOpen = false;
  }
  navbarLinks.classList.toggle("display-none-sm");
});

  navbarLinks.addEventListener("click", () => {
   navbarLinks.classList.add("display-none-sm");
 });

