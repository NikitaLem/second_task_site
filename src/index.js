import './blocks/header/header.js';
import moment from 'moment';
import './blocks/calendar/calendar.js';

var html = require('./index.pug');
const css = require('./index.styl');

console.log("I'm the enty point");

var pubDate = moment().format('MMM Do YY');

var event1 = {
    author: 'Тимофей Петрович',
    article: 'мероприятия',
    date: pubDate
};

function setInfo() {
    document.querySelector('.info_author').innerHTML = 'Автор: ' + event1.author;
    document.querySelector('.info_article').innerHTML = 'Тема: ' + event1.article;
    document.querySelector('.info_date').innerHTML = 'Дата публикации: ' + event1.date;
}

setInfo();