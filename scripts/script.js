footer = document.querySelectorAll('.slider-header-buttons a');

var i = 0;
while( i < footer.length ) {
  footer[i].addEventListener('click', doeActief);
  i++;
}

function doeActief() {
  var i = 0;
  while( i < footer.length ) {
    footer[i].classList.remove('active')
    i++;
  }
  this.classList.add('active');
}


// header
var button = document.querySelector(".slide-header img");
var element = document.querySelector("header nav");
var close = document.querySelector("header nav");

button.addEventListener("click", function() {
  element.classList.add("show");
});

close.addEventListener("click", function() {
  element.classList.remove("show");
});