addEventListener("load", init);

const modes = [];
let popUpButtons;

function init() {
  // Event listeners for accessibility buttons
  const accessibilityButtons = document.querySelectorAll(".accessibility-mode");
  accessibilityButtons.forEach((el) => {
    modes.push(el.getAttribute("data-mode"));
    el.addEventListener("click", setAccessibilityMode);
  });

  // Event listeners for pop-up buttons
  popUpButtons = document.querySelectorAll(".pop-up-button");
  popUpButtons.forEach((button) => {
    button.addEventListener("click", closePopUp);
  });
}

function setAccessibilityMode(event) {
  // Reset pop-up shown class
  popUpButtons.forEach((button) => button.parentNode.classList.add("shown"));

  // Set mode
  const mode = event.target.getAttribute("data-mode");
  modes.forEach((m) => document.body.classList.remove(m));
  document.body.classList.add(mode);
}

function closePopUp(event) {
  event.currentTarget.parentNode.classList.remove("shown");
}
