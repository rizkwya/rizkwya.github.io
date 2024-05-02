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

document.getElementById('l').addEventListener('click', function () {
    var sectionTujuan = document.querySelector('#home');
    if (sectionTujuan) {
        sectionTujuan.scrollIntoView({ behavior: 'smooth' });
    }
});

document.getElementById('u').addEventListener('click', function () {
    var sectionTujuan = document.querySelector('#skills');
    if (sectionTujuan) {
        sectionTujuan.scrollIntoView({ behavior: 'smooth' });
    }
});

document.getElementById('v').addEventListener('click', function () {
    var sectionTujuan = document.querySelector('#music');
    if (sectionTujuan) {
        sectionTujuan.scrollIntoView({ behavior: 'smooth' });
    }
});

const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
    {
        title: "Nobody",
        name: "OneRepublic",
        source: "https://rizkwya.xyz/songs/nobody.mp3",
    },
    {
        title: "Figure It Out",
        name: "ian",
        source: "https://rizkwya.xyz/songs/FigureItOut.mp3",
    },
    {
        title: "2 days into college",
        name: "Aimee Carty",
        source:
            "https://rizkwya.xyz/songs/2daysintocollege.mp3",
    },
    {
        title: "Push Ups",
        name: "Drake",
        source:
            "https://rizkwya.xyz/songs/PushUps.mp3",
    },
    {
        title: "Chicago Freestyle",
        name: "Drake, Giveon",
        source:
            "https://rizkwya.xyz/songs/ChicagoFreestyle.mp3",
    },

    {
        title: "Life Story",
        name: "Prinz",
        source:
            "https://rizkwya.xyz/songs/lifestory.mp3",
    },
    {
        title: "I Choose You (Acoustic)",
        name: "Kiana Ledé",
        source:
            "https://rizkwya.xyz/songs/ichooseyou.mp3",
    },
];

let currentSongIndex = 3;

function updateSongInfo() {
    songName.textContent = songs[currentSongIndex].title;
    artistName.textContent = songs[currentSongIndex].name;
    song.src = songs[currentSongIndex].source;

    song.addEventListener("loadeddata", function () { });
}

song.addEventListener("ended", function () {
    currentSongIndex = (currentSongIndex) % songs.length;
    updateSongInfo();

    if (currentSongIndex === 6) {
        playPauseButton.click();
    } else {
        forwardButton.click();
    }
});

song.addEventListener("timeupdate", function () {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
});

song.addEventListener("loadedmetadata", function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
});

function pauseSong() {
    song.pause();
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
}

function playSong() {
    song.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
}

function playPause() {
    if (song.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
    song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
    playSong();
});

forwardButton.addEventListener("click", function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongInfo();
    playPause();
});

backwardButton.addEventListener("click", function () {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongInfo();
    playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    centeredSlides: true,
    initialSlide: 3,
    slidesPerView: "auto",
    allowTouchMove: false,
    spaceBetween: 40,
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".forward",
        prevEl: ".backward",
    },
});
