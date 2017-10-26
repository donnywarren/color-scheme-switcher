const redButton = document.querySelector('.js-button.red');
const whiteButton = document.querySelector('.js-button.white');
const blueButton = document.querySelector('.js-button.blue');
const yellowButton = document.querySelector('.js-button.yellow');

redButton.addEventListener('click', changeRed);
whiteButton.addEventListener('click', changeWhite);
blueButton.addEventListener('click', changeBlue);
yellowButton.addEventListener('click', changeYellow);

function changeRed() {
  $('body').css('background', 'red');
  $('body').css('color', 'white');
}
function changeWhite() {
  $('body').css('background', 'white');
  $('body').css('color', 'black');
}
function changeBlue() {
  $('body').css('background', 'blue');
  $('body').css('color', 'white');
}
function changeYellow() {
  $('body').css('background', 'yellow');
  $('body').css('color', 'black');
}
