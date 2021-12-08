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
var button = document.querySelectorAll(".slide-header img");
var element = document.querySelector("header nav");
var close = document.querySelector("header nav img");

for (i=0; i<button.length; i++) {
  button[i].addEventListener("click", function() {
    element.classList.add("show");
  });
}

close.addEventListener("click", function() {
  element.classList.remove("show");
});





// footer
const mediaQuery = window.matchMedia('(min-width: 992px)')

if (mediaQuery.matches) {
  const details = document.querySelectorAll("details");
  for (i=0; i<details.length; i++) {
    details[i].setAttribute("open", "");
  }
}
