let body = document.querySelector('body');
let main = document.querySelector('.main');
let mainBtn = document.querySelector('.main-btn');
let open = document.querySelector('.open');
let openBtn = document.querySelector('.open-btn');

mainBtn.addEventListener('click', (event)=>{
    // console.log(event.target.innerText);
    if(event.target.innerText == 'OPEN MODAL'){
        main.style.visibility = 'hidden'
        open.style.visibility = 'visible'
        body.style.backgroundColor = '#333'
    }

});

openBtn.addEventListener('click', (event)=>{
    if(event.target.innerText == ''){
        open.style.visibility = 'hidden';
        main.style.visibility = 'visible'
        body.style.backgroundColor = 'cadetblue'
    }
})