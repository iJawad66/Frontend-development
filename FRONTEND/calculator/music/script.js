const songs = [
    {
        title: "Song One",
        artist: "Artist One",
        src: "songs/song1.mp3"
    },
    {
        title: "Song Two",
        artist: "Artist Two",
        src: "songs/song2.mp3"
    },
    {
        title: "Song Three",
        artist: "Artist Three",
        src: "songs/song3.mp3"
    }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
}

loadSong(songs[currentSong]);

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    currentSong++;
    
    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(songs[currentSong]);
    audio.play();
}

function prevSong() {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(songs[currentSong]);
    audio.play();
}

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

audio.addEventListener("ended", () => {
    nextSong();
});