import { sliderWithTrack } from '../sliders/sliders';

const myAudioPlayer = function() {
  sliderWithTrack();

  const activeSong = document.getElementById('song');
  const playBtn = document.getElementById('songPlay');
  const stopBtn = document.getElementById('songStop');
  const volumeBtn = document.getElementById('songVolume');
  const songTrack = document.getElementById('song-meter');
  const songVolume = document.getElementById('song-volume');

  const playOfPauseSong = function() {
    if (activeSong.paused) { 
      activeSong.play();
      playBtn.innerHTML = '<i class="fas fa-pause">';
    } else {
      activeSong.pause();
      playBtn.innerHTML = '<i class="fas fa-play">';
    }
  };

  const stopSong = function() {
    activeSong.pause();
    activeSong.currentTime = 0;
    playBtn.innerHTML = '<i class="fas fa-play">';
  };

  const updateTime = function() {
    const songTimer = document.querySelector('.audio__timer');
    let currentSeconds = (Math.floor(activeSong.currentTime % 60) < 10 ? '0' : '') + Math.floor(activeSong.currentTime % 60);
    let currentMinutes = Math.floor(activeSong.currentTime / 60);
    let percentageOfSong = (activeSong.currentTime / activeSong.duration) * 100;

    songTrack.value = percentageOfSong;
    songTimer.innerHTML = currentMinutes + ':' + currentSeconds;
  };

  const setLocation = function() {
    activeSong.currentTime = (songTrack.value / 100) * activeSong.duration; 
  };

  const toggleVolume = function() {
    if (activeSong.volume != 0) {
      activeSong.volume = 0;
      volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
    } else {
      activeSong.volume = 1;
      volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
  };

  const setVolume = function() {
    activeSong.volume = songVolume.value / 100;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  };

  const stopWhenTracking = function stopWhenTrackingStarts() {
    activeSong.pause();
    playBtn.innerHTML = '<i class="fas fa-pause">';
  };

  const playWhenTracking = function playWhenTrackingEnds() {
    activeSong.play();
    playBtn.innerHTML = '<i class="fas fa-play">';
  };

  playBtn.addEventListener('click', playOfPauseSong, false);
  stopBtn.addEventListener('click', stopSong, false);
  volumeBtn.addEventListener('click', toggleVolume, false);
  activeSong.addEventListener('timeupdate', updateTime, false);
  songTrack.addEventListener('click', setLocation, false);
  songTrack.addEventListener('mousedown', stopWhenTracking, false);
  songTrack.addEventListener('mouseup', playWhenTracking, false);
  songVolume.addEventListener('change', setVolume, false);
};

export { myAudioPlayer };
