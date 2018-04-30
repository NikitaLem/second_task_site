import '../sliders/sliders.js';

var activeSong;

document.getElementById('songPlay').addEventListener('click', playPause, false);
document.getElementById('songStop').addEventListener('click', stop, false);
document.getElementById('songVolume').addEventListener('click', volumeOnOff, false);
document.getElementById('song').addEventListener('timeupdate', updateTime, false);
document.getElementById('song-meter').addEventListener('click', setLocation, false);
document.getElementById('song-volume').addEventListener('change', setVolume, false);

function playPause() {

    activeSong = document.getElementById('song');
    if(activeSong.paused) { 
        activeSong.play();
        document.getElementById('songPlay').innerHTML = '<i class="fas fa-pause">';
    }
    else {
        activeSong.pause();
        document.getElementById('songPlay').innerHTML = '<i class="fas fa-play">';
    }
}

function stop() {
    activeSong.currentTime = 0;
    activeSong.pause();
    document.getElementById('songPlay').innerHTML = '<i class="fas fa-play">';
}

function updateTime() {
    
    var currentSeconds = (Math.floor(activeSong.currentTime % 60) < 10 ? '0' : '') + Math.floor(activeSong.currentTime % 60);
    var currentMinutes = Math.floor(activeSong.currentTime / 60);
    var percentageOfSong = (activeSong.currentTime / activeSong.duration) * 100;
    var songMeter = document.querySelector('.sliders');

    document.querySelector('.sliders').value = percentageOfSong;
    document.querySelector('.sliders__popup').innerHTML = currentMinutes + ':' + currentSeconds;
    document.querySelector('.audio__timer').innerHTML = currentMinutes + ':' + currentSeconds;
}

function setLocation() {
    var songMeter = document.querySelector('.sliders');

    activeSong.currentTime = (songMeter.value / 100) * activeSong.duration; 
}

function volumeOnOff() {
    if(activeSong.volume != 0) {
        activeSong.volume = 0;
        document.getElementById('songVolume').innerHTML = '<i class="fas fa-volume-off"></i>'
    } else {
        activeSong.volume = 1;
        document.getElementById('songVolume').innerHTML = '<i class="fas fa-volume-up"></i>'
    }
}

function setVolume() {
    var songVolume = document.getElementById('song-volume').value;
    
    activeSong.volume = songVolume / 100;
    document.getElementById('songVolume').innerHTML = '<i class="fas fa-volume-up"></i>'
}