let elems = document.getElementsByClassName('portfolioItem');

console.log(elems);
for (let elem of elems){
    elem.addEventListener('click', function(evt){
      if(evt.target.classList.contains("portfolioItemExpanded") ){
          evt.target.classList.remove("portfolioItemExpanded");
      }else if(evt.target.parentElement.classList.contains('portfolioItemExpanded')){
          evt.target.parentElement.classList.remove("portfolioItemExpanded");
      }else{
        if(evt.target.classList.contains('portfolioItem')){
          evt.target.classList.add("portfolioItemExpanded");
        }else{
          evt.target.parentElement.classList.add("portfolioItemExpanded");
        }
      }
    });
  }