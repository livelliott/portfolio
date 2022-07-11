const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");
const nav = document.querySelector("nav");
const contains = document.querySelector(".container");

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    nav.classList.toggle('no-blur');
    nav.classList.toggle('full-opacity');
    // contains.classList.toggle('full-blur');

})


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}