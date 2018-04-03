var activeSong;

document.getElementById('songPlay').addEventListener('click', playPause, false);
document.getElementById('songStop').addEventListener('click', stop, false);

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

    var percentageOfVolume = activeSong.volume / 1;
    var percentageOfVolumeMeter = document.getElementById('volumeMeter').offsetWidth + percentageOfVolume;

    document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}

function stop() {
    activeSong.currentTime = 0;
    activeSong.pause();
    document.getElementById('songPlay').innerHTML = '<i class="fas fa-play">';
}