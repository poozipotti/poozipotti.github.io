$(document).ready(function(){
    var navBar = $('#mainNavbar');
    var elementToStartChange = $('#mainContainer');
    var offset= elementToStartChange.offset();
    var transitioned= false;
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > (offset.top-navBar.height())) {
            navBar.removeClass("navbar-clear");
            navBar.addClass("navbar-solid");
            transitioned=true;
       } else {
            navBar.removeClass("navbar-solid");
            navBar.addClass("navbar-clear");
            if(transitioned){
                navBar.addClass("navbar-clear-anim");
            }
       }
   });
});

