let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', '2', '3', '4', '5',6];
let button = document.getElementById('button');
let color = document.querySelector('.color');

button.addEventListener('click', ()=>{
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    function getRandomNumber(){
        return Math.floor(Math.random() * hex.length);
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    button.style.backgroundColor = hexColor;
})