const redButton = document.querySelector('.js-buttons .red')
const whiteButton = document.querySelector('.js-buttons .white')
const blueButton = document.querySelector('.js-buttons .blue')
const yellowButton = document.querySelector('.js-buttons .yellow')

const changeRed = function(){
    document.body.style.backgroundColor = "red"
    document.body.style.color = "white"
  }
  const changeWhite = function(){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }
  const changeBlue = function(){
    document.body.style.backgroundColor = "blue"
    document.body.style.color = "white"
  }
  const changeYellow = function(){
    document.body.style.backgroundColor = "yellow"
    document.body.style.color = "black"
  }

redButton.addEventListener("click", changeRed)
whiteButton.addEventListener("click", changeWhite)
blueButton.addEventListener("click", changeBlue)
yellowButton.addEventListener("click", changeYellow)
