// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  if (document.readyState === "complete") {
  var header = document.getElementById("navbar");
    if (window.pageYOffset > document.getElementById("titleContainer").offsetTop ) {
      header.classList.add("navbarShow");
    } else {
      header.classList.remove("navbarShow");
    }
  }
};
