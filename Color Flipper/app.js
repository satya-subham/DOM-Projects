let colors = ["green", "red", "rgba(133,122,200", "#f15025"];
let button = document.getElementById('button');
let color = document.querySelector('.color');

button.addEventListener('click', (event)=>{
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    function getRandomNumber(){
        return Math.floor(Math.random() * colors.length);
    }
    button.style.backgroundColor = colors[randomNumber];
    
})