const video = document.querySelector('video');
const button = Array.from(document.querySelectorAll('button'));
button.map((button)=>{
    button.addEventListener('click', (event)=>{
        if(button.innerText == 'Play'){
            video.play();
            console.log(event.target)
        }else if(button.innerText == 'Pause'){
            video.pause();
            console.log(event.target);
        }
    })
})