const redButton = document.querySelector('.js-button.red')
const whiteButton = document.querySelector('.js-button.white')
const blueButton = document.querySelector('.js-button.blue')
const yellowButton = document.querySelector('.js-button.yellow')

redButton.addEventListener("click", changeRed)
whiteButton.addEventListener("click", changeWhite)
blueButton.addEventListener("click", changeBlue)
yellowButton.addEventListener("click", changeYellow)

function changeRed(){
  document.body.style.backgroundColor = "red"
  document.body.style.color = "white"
}
function changeWhite(){
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
}
function changeBlue(){
  document.body.style.backgroundColor = "blue"
  document.body.style.color = "white"
}
function changeYellow(){
  document.body.style.backgroundColor = "yellow"
  document.body.style.color = "black"
}


