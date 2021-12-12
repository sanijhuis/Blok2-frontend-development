slider = document.querySelectorAll('.slider-header-buttons a');

var i = 0;
while( i < slider.length ) {
  slider[i].addEventListener('click', doeActief);
  i++;
}

function doeActief() {
  var i = 0;
  while( i < slider.length ) {
    slider[i].classList.remove('active')
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

// header second
var button = document.querySelectorAll("header:nth-child(2) article:nth-child(1) img");
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
