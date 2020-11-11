// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navB");

// Get the offset position of the navbar
var sticky = navB.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navB.classList.add("sticky")
  } else {
    navB.classList.remove("sticky");
  }
}