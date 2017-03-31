document.addEventListener("DOMContentLoaded", function(e) {
  // Markup Elements
  var home_nav = document.getElementById("home-nav");
  var main_nav = document.getElementById("main-nav");

  // Scroll Listener
  window.addEventListener('scroll', function(e) {
    var last_known_scroll_position = window.scrollY;
    if(last_known_scroll_position > 500) {
      enterWaypoint(main_nav, home_nav);
    } else if(last_known_scroll_position < 500) {
      exitWaypoint(main_nav, home_nav);
    }
  });
});
