deButtons = document.querySelectorAll('.slider-header-buttons a');

var i = 0;
while( i < deButtons.length ) {
  deButtons[i].addEventListener('click', doeActief);
  i++;
}



function doeActief() {
  var i = 0;
  while( i < deButtons.length ) {
    deButtons[i].classList.remove('active')
    i++;
  }
  this.classList.add('active');
}