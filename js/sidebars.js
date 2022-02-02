/* global bootstrap: false */
// (function () {
//   'use strict'
//   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//   tooltipTriggerList.forEach(function (tooltipTriggerEl) {
//     new bootstrap.Tooltip(tooltipTriggerEl)
//   })
// })()




/**
 * Get the value of a cookie
 * Source: https://gist.github.com/wpsmith/6cf23551dd140fb72ae7
 * @param  {String} name  The name of the cookie
 * @return {String}       The cookie value
 */
 function getCookie (name) {
	let value = `; ${document.cookie}`;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}

let sidebar = getCookie('sidebar');
if (sidebar === 'collapsed') {
  document.body.classList.add("collapsed");  
}

function navToggle() {

  let currentSidebar = getCookie('sidebar');

  if (currentSidebar === 'collapsed') {
    document.body.classList.remove("collapsed");
    document.cookie = 'sidebar=collapsed; path=/; max-age=0;';
  } else {
    document.body.classList.add("collapsed");
    document.cookie = 'sidebar=collapsed;';
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


