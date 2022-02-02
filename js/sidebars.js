/* global bootstrap: false */
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()




const sidebarInfo = localStorage.getItem("sidebar");

if (sidebarInfo === 'collapsed') {
  document.body.classList.add("collapsed");  
}

function navToggle() {
  let currentSidebar = localStorage.getItem("sidebar");

  if (currentSidebar === 'collapsed') {
    document.body.classList.remove("collapsed");
    localStorage.setItem("sidebar", "uncollapsed");
  } else {
    document.body.classList.add("collapsed");
    localStorage.setItem("sidebar", "collapsed");
  }
}


//eventlistern to listen for clicks in the sidebar
document.addEventListener('click', function (event) {
	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#nav-toggle')) return;
	// Don't follow the link
	event.preventDefault();
  //toggle sidebar nav collapse
  navToggle();
}, false);


