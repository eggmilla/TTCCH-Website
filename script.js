/* FAQ click to reveal text */
/* https://stackoverflow.com/questions/55442477/make-text-appear-disappear-on-button-click */
function toggleText() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

