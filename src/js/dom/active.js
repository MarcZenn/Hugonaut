document.addEventListener("DOMContentLoaded", function(e) {

  // Set active nav element.
  (function activeNavItems() {
    var location = window.location.href.split('/');

    [].forEach.call(document.getElementsByClassName('nav-list-item'), function(elem) {
      if(location[location.length - 2] == elem.id) {
        addClass(elem, 'nav_active'); // defined in adjacent dom.js file
      }
    });

    [].forEach.call(document.getElementsByClassName('sidebar-list-item'), function(elem) {
      if(location[location.length - 2] == elem.id) {
        addClass(elem, 'sidebar_active'); // defined in adjacent dom.js file
      }
    });
  })();


});
