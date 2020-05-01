function navStateChange() {
    var navOpen= "images/icon-close.svg";
    var navClosed= "images/icon-hamburger.svg";
    var currentSrc = document.querySelector('.hamburger-state').getAttribute('src');
    var newSrc = currentSrc == navOpen ? navClosed : navOpen;
    document.querySelector('.hamburger-state').src = newSrc;
  
  if(newSrc==navClosed) {
    document.querySelector(".main-nav--expanded").className = "main-nav";
    // document.querySelector(".main-nav").style.display = "none";
  }
  else {
    document.querySelector(".main-nav").className = "main-nav main-nav--expanded";
    // document.querySelector(".main-nav").style.display = "block";
  }
}