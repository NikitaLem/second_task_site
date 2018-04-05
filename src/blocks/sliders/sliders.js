/*JS code for sliders with popup*/
var sliderPopup = document.querySelectorAll('.sliders_popup');
var popup = document.querySelector('.sliders__popup');

for(var i =0; i<sliderPopup.length; i++) {
    sliderPopup[i].addEventListener('click', popupGo, false);
}

function popupGo(e) {
    popup.style.left = e.clientX - popup.getBoundingClientRect().width/2 - document.querySelector('.header__board').offsetLeft*1.1 + 'px';
    popup.style.top = (e.target.getBoundingClientRect().top - popup.getBoundingClientRect().height*1.8 - document.querySelector('.header__board').offsetTop + window.pageYOffset) + 'px';
}

/*JS code for sliders with track*/
function sliderTrack() {
    var val = $('.sliders_track').val();
    $('.sliders_track').css({'background':'-webkit-linear-gradient(left, #4eb7a8 0%, #4eb7a8 '+val+'%, #e5e5e5 '+val+'% ,#e5e5e5 100%)'});
}

document.querySelector('.sliders_track').addEventListener('input', sliderTrack, false);