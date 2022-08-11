let main = document.querySelector('.main');
let mainBtn = document.querySelector('.main-btn');
let open = document.querySelector('.open');
let openBtn = document.querySelector('.open-btn');

mainBtn.addEventListener('click', (event)=>{
    // console.log(event.target);
    if(main.style.visibility == 'visible'){
        main.style.visibility = 'hidden'
    }
})