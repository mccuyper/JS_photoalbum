const img = [
    'autumn-219972_1280.jpg',
    'california-1751455_1280.webp',
    'fantasy-3077928_1280.webp',
    'feather-3010848_1280.webp',
    'pexels-photo-1402787.jpeg',
    'pexels-photo-853199.jpeg'
];

let count = img.length;

function init() {
    let cards = document.querySelectorAll('.card');
    shuffle(img);
    for (let i = 0; i < img.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.background = 'url("./images/' + img[i] + '")';
        card.style.backgroundSize = 'cover';
        card.style.transform = 'rotate(' + randomInteger(-15, 15) + 'deg) ' + 'translate(' + randomInteger(-40, 40) + 'px,' + randomInteger(-40, 40) + 'px)';
        document.querySelector('.cover').append(card);
    }
}

init();

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

document.querySelector('.cover').addEventListener('click', event => {
    console.log(event.target);
    event.target.classList.add('go');
    count--;
    if (count == 0) {
        init();
        count = img.length;
    }
});