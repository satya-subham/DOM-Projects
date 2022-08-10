let reviews = [
    {
        id: 1,
        name: "R_A_A_V_A_N",
        work: "God Of Fear",
        img: "raavan.png",
        Text: "Despite of being a demon he was massive devotee of mahakal. raavan was most intellectual person ever born in earth. had the power of control all over the world. made presioner all the planets for this son. he made a undestroyable empire for himself. he was fearles, unstopable. had the fire on his eyes. still people hate him but people forgot the shivji they do worsip he had given his mane R_A_A_V_A_N. even people forgtot he written shivtandav, mahamrutunjaya chanting . the chant of get rid of death."
    },
    {
        id: 2,
        name: "Lord Ram",
        work: "man of dignity",
        img: "https://m.media-amazon.com/images/I/71QQeC6OIOL._SL1000_.jpg",
        Text: "Lord Rama can be simply described as a man who displays perfect moral as well as social behaviour. Lord Rama, in the words of Swami Vivekananda, is “the embodiment of truth, of morality, the ideal son, the ideal husband and above all, the ideal king”. He is a symbol of the victory of right over the evil."
    },
    {
        id: 3,
        name: "Sita",
        work: "honor of loyalty",
        img:"https://payload.cargocollective.com/1/18/606893/12892067/18268453_1936794769882240_302560149681202292_n_735.jpg",
        Text: "Sita is a Hindu goddess and the female protagonist of the Hindu epic, Ramayana. She is the consort of Rama, the avatar of the god Vishnu, and is regarded as a form of Vishnu's consort, Lakshmi. She is also the chief goddess of Rama-centric Hindu traditions."
    }
];

let img = document.querySelector('img');
let author = document.getElementById('author');
let life = document.getElementById('life');
let info = document.getElementById('info');

let preBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');


let currentItem = 0;
// window.addEventListener('DOMContentLoaded', ()=>{
//     showPerson();
// });

function showPerson() {
    let item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    life.textContent = item.work;
    info.textContent = item.Text;
}
showPerson();

nextBtn.addEventListener('click', (event)=>{
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});
preBtn.addEventListener('click', (event)=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});