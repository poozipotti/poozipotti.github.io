// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  if (document.readyState === "complete") {
  var header = document.getElementById("navbar");
  console.log(`document scroll = ${window.pageYOffset}`);
  console.log(`offsetbottom = ${document.getElementById('titleContainer').offsetTop}`);
    if (window.pageYOffset > document.getElementById("titleContainer").offsetTop ) {
      console.log('adding');
      header.classList.add("navbarShow");
    } else {
      console.log('removing');
      header.classList.remove("navbarShow");
    }
  }
};
