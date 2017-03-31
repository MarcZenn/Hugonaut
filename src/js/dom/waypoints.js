// Scroll Event Waypoints
function enterWaypoint(main_nav, home_nav) {
  if(!main_nav) {
    document.getElementsByClassName('mdl-layout__drawer-button')[0].id = 'home_drawer_fixed';
    document.getElementsByClassName('mdl-layout-title')[0].id = 'marker_fixed';
    document.getElementsByClassName('hero-nav')[0].id = 'home_nav_fixed';
  } else if(!home_nav) {
    [].forEach.call(document.getElementsByClassName('nav-list-item'), function(elem) {
      elem.style.display = "none";
    });
    document.getElementsByClassName('mdl-layout__drawer-button')[0].id = 'drawer_fixed';
    document.getElementsByClassName('nav')[0].id = 'nav_fixed';
    document.getElementsByClassName('mdl-layout-title')[0].id = 'marker_fixed';
  }
}
function exitWaypoint(main_nav, home_nav){
  if(!main_nav) {
    document.getElementsByClassName('mdl-layout__drawer-button')[0].id = '';
    document.getElementsByClassName('mdl-layout-title')[0].id = '';
    document.getElementsByClassName('hero-nav')[0].id = 'home_nav';
  } else if(!home_nav) {
    [].forEach.call(document.getElementsByClassName('nav-list-item'), function(elem) {
      elem.style.display = "inline-block";
    });
    document.getElementsByClassName('mdl-layout__drawer-button')[0].id = '';
    document.getElementsByClassName('nav')[0].id = '';
    document.getElementsByClassName('mdl-layout-title')[0].id = '';
  }
}
