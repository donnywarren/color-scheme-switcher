const buttons = document.querySelectorAll('li')

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event){
        document.body.style.backgroundColor = event.target.className
    })
}
