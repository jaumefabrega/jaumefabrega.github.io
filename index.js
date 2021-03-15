addEventListener('load', init);

const modes = [];

function init () {
  const accessibilityButtons = document.querySelectorAll('.accessibility-mode');
  accessibilityButtons.forEach(el => {
    modes.push(el.getAttribute('data-mode'));
    el.addEventListener('click', setAccessibilityMode)
  });
}

function setAccessibilityMode (event) {
  const mode = event.target.getAttribute('data-mode');
  modes.forEach(m => document.body.classList.remove(m));
  document.body.classList.add(mode);
}