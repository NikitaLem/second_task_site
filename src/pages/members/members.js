import '../../blocks/header/header.js';
import '../../favicons/favicons';

var html = require('./members.pug');
const css = require('./members.styl');

//делаем переключатель тренеров

var trainerArr = document.querySelectorAll('.member__container_trainer');
const btnLeft = document.querySelector('.member__btn_left');
const btnRight = document.querySelector('.member__btn_right');

btnLeft.addEventListener('click', goPrev, false);
btnRight.addEventListener('click', goNext, false);

function goNext() {
    for(var count = 0; count < trainerArr.length; count++) {
        if(trainerArr[count].classList.contains('member__container_left')) {
            trainerArr[count].classList.remove('member__container_no-transition');
            trainerArr[count].classList.remove('member__container_left');
            trainerArr[count].classList.add('member__container_center');
        }
        else if(trainerArr[count].classList.contains('member__container_center')) {
            trainerArr[count].classList.remove('member__container_center');
            trainerArr[count].classList.add('member__container_right');
        }
        else {
            trainerArr[count].classList.add('member__container_no-transition');
            trainerArr[count].classList.remove('member__container_right');
            trainerArr[count].classList.add('member__container_left');
        }
    }
}

function goPrev() {
    for(var count=trainerArr.length - 1; count >= 0; count--) {
        if(trainerArr[count].classList.contains('member__container_right')) {
            trainerArr[count].classList.remove('member__container_no-transition');
            trainerArr[count].classList.remove('member__container_right');
            trainerArr[count].classList.add('member__container_center');
        }
        else if(trainerArr[count].classList.contains('member__container_center')) {
            trainerArr[count].classList.remove('member__container_center');
            trainerArr[count].classList.add('member__container_left');
        }
        else {
            trainerArr[count].classList.add('member__container_no-transition');
            trainerArr[count].classList.remove('member__container_left');
            trainerArr[count].classList.add('member__container_right');
        }
    }
}