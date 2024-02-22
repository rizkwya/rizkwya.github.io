const style = `
    background: transparent;
    padding: 12px;
    font-size: 2rem;
`;
console.log('%cRizk has made all of this.', style);

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let apacoba = 0;
let lagu = document.getElementById("lagu")
function playPause() {
    if (apacoba == 0) {
        apacoba = 1;
        lagu.play();
        lagu.loop = true;
    }
    else {
        apacoba = 0;
        lagu.pause();
    }
}

let apabila = document.querySelectorAll('.terkadang');
apabila.forEach(woilah => {
    woilah.addEventListener('click', () => {
        woilah.classList.toggle('active');
    });
});
