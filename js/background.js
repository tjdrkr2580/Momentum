const body = document.querySelector("body");
const background = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg",];

const backgroundRandom = background[Math.floor(Math.random()*background.length)];


function backgroundChange(){
    body.style.backgroundImage = `url("image/${backgroundRandom}")`;
}

backgroundChange();