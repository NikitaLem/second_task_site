import './blocks/header/header.js';
import './favicons/favicons.js';
import moment from 'moment';
import { myCalendar } from './blocks/calendar/calendar.js';

const html = require('./index.pug');
const css = require('./index.styl');

(function() {
  myCalendar();

  const authorOfArticleView = document.querySelector('.info_author');
  const titleOfArticleView =  document.querySelector('.info_article');
  const dateOfArticleView =  document.querySelector('.info_date');

  const sidebar = document.querySelector('.sidebar');
  const news = [...document.querySelectorAll('.sidebar__toggle')];
  const newsData = [...document.querySelectorAll('.main__event, .main__news-article')];
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

  const showArticle = function(event) {
    const target = event.target;

    if (!target.closest('.sidebar__toggle')) return;

    news.forEach((item, i) => {
      if (item === target) {
        newsData[i].classList.add('article_visible');
        authorOfArticleView.innerHTML = `Автор: ${pubArr[i].author}`;
        titleOfArticleView.innerHTML = `Тема: ${pubArr[i].article}`;
        dateOfArticleView.innerHTML = `Дата публикации: ${pubArr[i].date}`;
      } else {
        newsData[i].classList.remove('article_visible');
      }
    });
  };

  sidebar.addEventListener('click', showArticle, false);
}());
