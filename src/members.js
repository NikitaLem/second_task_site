import './blocks/header/header.js';

var html = require('./members.pug');
const css = require('./members.styl');

//делаем переключатель тренеров

var trainerArr = document.querySelectorAll('.member__container_trainer');
const btnLeft = document.querySelector('.member__btn_left');
const btnRight = document.querySelector('.member__btn_right');
var count = 0;

btnLeft.addEventListener('click', goPrev, false);
btnRight.addEventListener('click', goNext, false);

function goNext() {
    trainerArr[count].classList.remove('member__container_visible');
    count++;
    if(count == trainerArr.length) {
        count = 0;
    }
    trainerArr[count].classList.add('member__container_visible');
}

function goPrev() {
    trainerArr[count].classList.remove('member__container_visible');
    count--;
    if(count == -1) {
        count = trainerArr.length - 1;
    }
    trainerArr[count].classList.add('member__container_visible');
}