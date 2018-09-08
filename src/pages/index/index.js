import '../../blocks/header/header.js';
import moment from 'moment';
import { myCalendar } from '../../blocks/calendar/calendar';

const html = require('./index.pug');
const css = require('./index.styl');

(function() {
	myCalendar();
}());

//////////////////////////news-scripts////////////////////////////////////

const news = document.querySelectorAll(".sidebar__toggle");
const newsData = document.querySelectorAll(".main__event, .main__news-article");
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
			newsData[i].classList.add("visible");
			document.querySelector('.info_author').innerHTML = 'Автор: ' + pubArr[i].author;
			document.querySelector('.info_article').innerHTML = 'Тема: ' + pubArr[i].article;
			document.querySelector('.info_date').innerHTML = 'Дата публикации: ' + pubArr[i].date;
		}
		else newsData[i].classList.remove("visible");
	}
}