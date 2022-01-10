var slideValues = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideValues++;
  if (slideValues > x.length) {slideValues = 1}
  x[slideValues-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
