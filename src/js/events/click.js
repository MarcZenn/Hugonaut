document.addEventListener("DOMContentLoaded", function(e) {

  // Show/Hide View Modals
  document.getElementById('show-demo-modal').onclick = function() {
    removeClass(document.getElementsByClassName('explainer-video-modal')[0], 'hidden')
  }
  document.getElementById('close-explainer-modal').onclick = function() {
    addClass(document.getElementsByClassName('explainer-video-modal')[0], 'hidden')
  }

  // Show/Hide Form Modals
  document.getElementById('show-demo-form').onclick = function() {
    removeClass(document.getElementsByClassName('request-demo-modal')[0], 'hidden')
  }
  document.getElementById('close-demo-modal').onclick = function() {
    addClass(document.getElementsByClassName('request-demo-modal')[0], 'hidden')
  }
});
