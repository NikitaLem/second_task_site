import './blocks/header/header.js';
import moment from 'moment';
import './blocks/calendar/calendar.js';

var html = require('./index.pug');
const css = require('./index.styl');

console.log("I'm the enty point");

//////////////////////////news-scripts////////////////////////////////////

const news = document.querySelectorAll(".sidebar__toggle");
const newsData = document.querySelectorAll(".main__event");
var pubArr = [{
        author: 'Тимофей Петрович',
        article: 'мероприятия',
        date: moment().format('MMM Do YY')
    },
    {
        author: 'Мустафа Мурмаметов',
        article: 'соревнования',
        date: moment().format('MMM Do YY')
    },
    {
        author: 'Тимофей Петрович',
        article: 'мероприятия',
        date: moment().format('MMM Do YY')
    },
    {
        author: 'Мустафа Мурмаметов',
        article: 'соревнования',
        date: moment().format('MMM Do YY')
    }
];

for(var i = 0; i < news.length; i++) {
    news[i].addEventListener('click', setNews, false);
}

function setNews(e) {
    for(var i = 0; i < news.length; i++) {
        if(e.target == news[i]) {
            newsData[i].classList.add("main__event_visible");
            document.querySelector('.info_author').innerHTML = 'Автор: ' + pubArr[i].author;
            document.querySelector('.info_article').innerHTML = 'Тема: ' + pubArr[i].article;
            document.querySelector('.info_date').innerHTML = 'Дата публикации: ' + pubArr[i].date;
        }
        else newsData[i].classList.remove("main__event_visible");
    }
}