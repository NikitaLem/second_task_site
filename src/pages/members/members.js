import '../../blocks/header/header.js';
import '../../favicons/favicons';

const html = require('./members.pug');
const css = require('./members.styl');

(function() {
  const trainersSlider = document.querySelector('.member-trainers__flex-container');
  const allTrainers = [...document.querySelectorAll('.member-trainer')]; 
  const btnPrev = document.querySelector('.member__btn_left');
  const btnNext = document.querySelector('.member__btn_right');

  let slidedValue = 0;
  const leftEdge = 0;
  const rightEdge = -100 * (allTrainers.length - 1);

  const goPrev = function() {
    if (slidedValue >= leftEdge) return;

    slidedValue += 100;

    trainersSlider.style.transform = `translate(${slidedValue}%)`;
  };

  const goNext = function() {
    if (slidedValue <= rightEdge) return;
    
    slidedValue -= 100;

    trainersSlider.style.transform = `translate(${slidedValue}%)`;
  };

  const preventCheck = function() {
    const allToggles = [...document.querySelectorAll('.switch__toggle')];

    allToggles.forEach((item) => {
      item.disabled = true;
    });
  };

  preventCheck();

  btnPrev.addEventListener('click', goPrev, false);
  btnNext.addEventListener('click', goNext, false);
}());
