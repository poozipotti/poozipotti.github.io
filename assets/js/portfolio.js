let elems = document.getElementsByClassName('portfolioItem');

console.log(elems);
for (let elem of elems){
    elem.addEventListener('click', function(evt){
      if(evt.target.classList.contains("portfolioItemExpanded")){
          evt.target.classList.remove("portfolioItemExpanded");
      }else{
        evt.target.classList.add("portfolioItemExpanded");
      }
    });
  }