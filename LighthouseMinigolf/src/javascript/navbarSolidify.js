$(document).ready(function(){
    var navBar = $('#mainNavbar');
    console.log(navBar[0]);
    var elementToStartChange = $('.mainContainer');
    console.log(elementToStartChange[0]);
    var offset= elementToStartChange.offset();
    var transitioned= false;
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > (offset.top - navBar.height())) {
            navBar.removeClass("navbar-clear");
            navBar.addClass("navbar-solid");
            transitioned=true;
       } else {
            navBar.removeClass("navbar-solid");
            navBar.addClass("navbar-clear");
       }
   });
});

