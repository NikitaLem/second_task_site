import '../../blocks/header/header.js';
import '../../favicons/favicons.js';
import moment from 'moment';
import { myCalendar } from '../../blocks/calendar/calendar.js';

const html = require('./main.pug');
const css = require('./main.styl');

(function() {
  document.onload = myCalendar();

  const news = [...document.querySelectorAll(".sidebar__toggle")];
  const newsData = [...document.querySelectorAll(".main__event, .main__news-article")];
  const pubArr = [
    {
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
  
  function setNews(event) {
    for(let i = 0; i < news.length; i++) {
      if(event.target == news[i]) {
        newsData[i].classList.add("article_visible");
        document.querySelector('.info_author').innerHTML = 'Автор: ' + pubArr[i].author;
        document.querySelector('.info_article').innerHTML = 'Тема: ' + pubArr[i].article;
        document.querySelector('.info_date').innerHTML = 'Дата публикации: ' + pubArr[i].date;
      }
      else newsData[i].classList.remove("article_visible");
    }
  }

  news.forEach((item) => {
    item.addEventListener('click', setNews, false);
  });
}());