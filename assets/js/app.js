const menuTray = document.querySelector(".header__nav--mobile");
const menuBackground = document.querySelector(".header__nav--background");
const menuButton = document.querySelector(".header__button");
const body = document.body;

// ========== ========== =========

// Function that toggles the class "-active" to the targeted element
const callMenu = () => {
  menuBackground.classList.toggle("header__nav--background-active");
  menuTray.classList.toggle("header__nav--mobile-active");
  menuButton.classList.toggle("header__button--active");
  body.classList.toggle("body--no-scroll");
};

// Add event listener to the targeted button that calls the function
menuButton.addEventListener("click", callMenu);
menuBackground.addEventListener("click", callMenu);
