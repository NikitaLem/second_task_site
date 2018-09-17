import '../../blocks/header/header.js';
import '../../favicons/favicons';

const html = require('./members.pug');
const css = require('./members.styl');

(function() {
  const trainersSlider = document.querySelector('.member-trainers__flex-container');
  const allTrainers = [...document.querySelectorAll('.member-trainer')];

  let slidedValue = 0;
  const leftEdge = 0;
  const rightEdge = -100 * (allTrainers.length - 1);

  const checkSliderPosition = function() {
    const prevBtn = document.querySelector('.arw-btn_left');
    const nextBtn = document.querySelector('.arw-btn_right');

    if (slidedValue === leftEdge) {
      if (!prevBtn.classList.contains('arw-btn_grey')) {
        prevBtn.classList.remove('arw-btn_green');
        prevBtn.classList.add('arw-btn_grey');
        prevBtn.disabled = true;
      }
    }

    if (slidedValue === rightEdge) {
      if (!nextBtn.classList.contains('arw-btn_grey')) {
        nextBtn.classList.remove('arw-btn_green');
        nextBtn.classList.add('arw-btn_grey');
        nextBtn.disabled = true;
      }
    }

    if (slidedValue < leftEdge && slidedValue > rightEdge) {
      prevBtn.classList.remove('arw-btn_grey');
      prevBtn.classList.add('arw-btn_green');
      prevBtn.disabled = false;
      nextBtn.classList.remove('arw-btn_grey');
      nextBtn.classList.add('arw-btn_green');
      nextBtn.disabled = false;
    }
  };

  const goPrev = function() {
    if (slidedValue >= leftEdge) return;

    slidedValue += 100;

    trainersSlider.style.transform = `translate(${slidedValue}%)`;
    checkSliderPosition();
  };

  const goNext = function() {
    if (slidedValue <= rightEdge) return;
    
    slidedValue -= 100;

    trainersSlider.style.transform = `translate(${slidedValue}%)`;
    checkSliderPosition();
  };

  const scrollTrainers = function(event) {
    const target = event.target;

    if (!target.closest('.arw-btn')) return;

    if (target.closest('.arw-btn_left')) goPrev();

    if (target.closest('.arw-btn_right')) goNext();
  };

  const preventCheck = function makeTogglesUncheable() {
    const allToggles = [...document.querySelectorAll('.switch__toggle')];

    allToggles.forEach((item) => {
      item.disabled = true;
    });
  };

  preventCheck();
  checkSliderPosition();

  document.addEventListener('click', scrollTrainers, false);
}());
