const style = `
    background: transparent;
    padding: 12px;
    font-size: 2rem;
`;
console.log('%cRizk has made all of this.', style);

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
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

document.addEventListener('DOMContentLoaded', () => {
    checkScroll();
});

window.onscroll = checkScroll;

function checkScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 450;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show');
            currentSection = sec.getAttribute('id');
        } else {
            sec.classList.remove('show');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === currentSection) {
            link.classList.add('active');
            document.title = "Rizk (" + currentSection.charAt(0).toUpperCase() + currentSection.slice(1) + ")";
        }
    });
}

document.getElementById('x').addEventListener('click', function () {
    var sectionTujuan = document.querySelector('#home');
    if (sectionTujuan) {
        sectionTujuan.scrollIntoView({ behavior: 'smooth' });
    }
});

document.getElementById('o').addEventListener('click', function () {
    var sectionTujuan = document.querySelector('#skills');
    if (sectionTujuan) {
        sectionTujuan.scrollIntoView({ behavior: 'smooth' });
    }
});
