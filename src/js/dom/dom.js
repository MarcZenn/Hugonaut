// CSS Class Manipulation
function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  }
}

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  }
}
