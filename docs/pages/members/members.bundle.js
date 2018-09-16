/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 223);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/browserconfig.xml";

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon-16x16.png";

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon-32x32.png";

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon.ico";

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/mstile-150x150.png";

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/safari-pinned-tab.svg";

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html><!DOCTYPE js><html lang=\"en\"><head><meta charset=\"UTF-8\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"/><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"../../favicons/apple-touch-icon.png\"/><link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"../../favicons/favicon-32x32.png\"/><link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"../../favicons/favicon-16x16.png\"/><link rel=\"manifest\" href=\"../../favicons/site.webmanifest\"/><link rel=\"mask-icon\" href=\"../../favicons/safari-pinned-tab.svg\" color=\"#5bbad5\"/><meta name=\"msapplication-TileColor\" content=\"#da532c\"/><meta name=\"theme-color\" content=\"#ffffff\"/><title>My Site</title></head><body><script defer=\"defer\" src=\"https://use.fontawesome.com/releases/v5.0.9/js/all.js\" integrity=\"sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl\" crossorigin=\"anonymous\"></script><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"/><script src=\"https://use.fontawesome.com/releases/v5.0.7/js/all.js\" defer=\"defer\"></script><script src=\"https://use.fontawesome.com/releases/v5.0.7/js/all.js\" defer=\"defer\"></script><header class=\"header-container\"><section class=\"header\"><nav class=\"menu\"><a class=\"menu__item\" href=\"../main/main.html\">Главная</a><a class=\"menu__item\" href=\"../gallery/gallery.html\">Галлерея</a><a class=\"menu__item\" href=\"../members/members.html\">Клубяне</a><a class=\"menu__item\" href=\"../keldim/keldim.html\">Склад</a><a class=\"menu__item\" href=\"../about/about.html\">О нас</a></nav><article class=\"header__board\"><div class=\"header__emblem\"></div><div class=\"header__text\">Альп-клуб ENERGY</div><div class=\"header__search\"><form class=\"search\"><input class=\"search__input search__input_grey\" type=\"search\" placeholder=\"Search...\" name=\"search\" maxlength=\"37\" autocomplete=\"on\"/><button class=\"search__button\" type=\"submit\"><i class=\"fa fa-search\"></i></button></form></div><div class=\"header__audio\"><section class=\"audio-player\"><audio class=\"audio\" id=\"song\" preload=\"metadata\"><source src=\"../../audio/Vladimir Visockiy - Zdes' vam ne ravnina.mp3\" type=\"audio/mpeg\"/></audio><div class=\"audio__btn\" id=\"songPlay\"> <i class=\"fas fa-play\"></i></div><div class=\"audio__btn\" id=\"songStop\"><i class=\"fas fa-stop\"></i></div><div class=\"audio__slider\"><form class=\"slider-form\"><input class=\"slider slider_red slider_nopopup slider_none\" id=\"song-meter\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" step=\"1\"/><div class=\"slider__grade slider__grade_none\"><span class=\"slider__value\">0</span><span class=\"slider__value\">25</span><span class=\"slider__value\">50</span><span class=\"slider__value\">75</span><span class=\"slider__value\">100</span></div></form></div><div class=\"audio__timer\">0:00</div><div class=\"audio__btn\" id=\"songVolume\"><i class=\"fas fa-volume-up\"></i></div><div class=\"audio__volume-meter\"><form class=\"slider-form\"><input class=\"slider slider_green slider_none slider_track\" id=\"song-volume\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" step=\"1\"/><div class=\"slider__grade slider__grade_grade\"><span class=\"slider__value\">0</span><span class=\"slider__value\">25</span><span class=\"slider__value\">50</span><span class=\"slider__value\">75</span><span class=\"slider__value\">100</span></div></form></div></section></div></article></section></header><main class=\"main-content-container\"><h1 class=\"members__title\">Состав клуба</h1><section class=\"member__section\"><div class=\"member__container\"><div class=\"member__person\"><h2 class=\"member__job\">Президент клуба</h2><div class=\"user-profile\"><div class=\"user-profile__img-container\"><img class=\"user-profile__img\" src=\"../../images/timophey.png\" alt=\"avatar\"/></div><div class=\"user-profile__info user-profile__info_green-white\"><div class=\"user-profile__name user-profile__name_green-white\">Тимофей Петрович</div><div class=\"user-profile__spec user-profile__spec_green-white\">Президент клуба</div><div class=\"icon__container\"><a class=\"user-profile__icon user-profile__icon_green-white\" href=\"/mock-address/change-me\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"user-profile__icon user-profile__icon_green-white user-profile__icon_green-white_red\" href=\"/mock-address/change-me\"><i class=\"fab fa-twitter\"></i></a><a class=\"user-profile__icon user-profile__icon_green-white\" href=\"/mock-address/change-me\"><i class=\"fas fa-basketball-ball\"></i></a></div></div></div></div><p class=\"member__text\">Президентом нашего клуба в данным момент является выдающийся альпинист с огромным опытом и багажом знаний, всеми любимый и уважаемый Тимофей Петрович. Под его руководством ENERGY проводит каждый год множество мероприятий, выигрывает в соревнованиях и достигает новых вершин как в прямом, так и в переносном смыслах!</p><blockquote class=\"member__about\">От себя: Альпинизм – не спорт, а образ жизни, требующий самых разных навыков и умений. Окунитесь в мир приключений, романтики, риска и опасностей, придя в наш клуб!</blockquote><table class=\"member__info-table\"><thead class=\"info-table__head\"><tr class=\"info-table__row\"><th class=\"info-table__head-cell\">Разряд по альпинизму</th><th class=\"info-table__head-cell\">Разряд по скалолазанию</th><th class=\"info-table__head-cell\">Возраст</th><th class=\"info-table__head-cell\">Стаж в клубе</th><th class=\"info-table__head-cell\">Умеет вкусно готовить</th><th class=\"info-table__head-cell\">Умеет играть на гитаре</th></tr></thead><tbody class=\"info-table__body\"><tr class=\"info-table__row\"><td class=\"info-table__body-cell\">Мастер спорта</td><td class=\"info-table__body-cell\">I разряд</td><td class=\"info-table__body-cell\">45 лет</td><td class=\"info-table__body-cell\">12 лет</td><td class=\"info-table__body-cell\"><label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\" checked=\"checked\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></td><td class=\"info-table__body-cell\"><label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\" checked=\"checked\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></td></tr></tbody></table><ul class=\"member__info-list\"><li class=\"member__info-list-item\">Разряд по альпинизму: Мастер спорта</li><li class=\"member__info-list-item\">Разряд по скалолазанию: I разряд</li><li class=\"member__info-list-item\">Возраст: 45 лет</li><li class=\"member__info-list-item\">Стаж в клубе: 12 лет</li><li class=\"member__info-list-item\">Умеет вкусно готовить: <label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\" checked=\"checked\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></li><li class=\"member__info-list-item\">Умеет играть на гитаре: <label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\" checked=\"checked\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></li></ul></div></section><section class=\"member__section member__section_relative\"><div class=\"member__btn member__btn_left\"><button class=\"arw-btn arw-btn_green arw-btn_left\" type=\"button\"><div class=\"arw-btn__text_green\"></div></button></div><div class=\"member__btn member__btn_right\"><button class=\"arw-btn arw-btn_green arw-btn_right\" type=\"button\"><div class=\"arw-btn__text_green\"></div></button></div><div class=\"member-trainers__flex-container\"><div class=\"member-trainer\"><div class=\"member__container\"><div class=\"member__person\"><h2 class=\"member__job\">Тренер новичков</h2><div class=\"user-profile\"><div class=\"user-profile__img-container\"><img class=\"user-profile__img\" src=\"../../images/catTrainer1.png\" alt=\"avatar\"/></div><div class=\"user-profile__info user-profile__info_green-white\"><div class=\"user-profile__name user-profile__name_green-white\">Алексей Таранов</div><div class=\"user-profile__spec user-profile__spec_green-white\">Тренер новичков</div><div class=\"icon__container\"><a class=\"user-profile__icon user-profile__icon_green-white\" href=\"/mock-address/change-me\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"user-profile__icon user-profile__icon_green-white user-profile__icon_green-white_red\" href=\"/mock-address/change-me\"><i class=\"fab fa-twitter\"></i></a><a class=\"user-profile__icon user-profile__icon_green-white\" href=\"/mock-address/change-me\"><i class=\"fas fa-basketball-ball\"></i></a></div></div></div></div><p class=\"member__text\">Леша недавно в клубе, но опыта ему не занимать. С детства привык к работе с веревкой и железом. Прекрасный скалолаз, постоянный участник различных региональных соревнований по болдерингу. А ещё он просто веселый парень, который точно всех развеселит. Очень милый внутри, хоть с первого взгляда этого и не заметно.</p><blockquote class=\"member__about\">От себя: Альпинизм это не только лазание по сложным маршрутам, с ледорубами, кошками, френдами и веревкой, но и обычные восхождения по альпийским лугам, каменистым склонам, осыпям и просторным хребтам, где стоят тысячелетние жандармы, как бы охраняющие, покой и величие гор.</blockquote><table class=\"member__info-table\"><thead class=\"info-table__head\"><tr class=\"info-table__row\"><th class=\"info-table__head-cell\">Разряд по альпинизму</th><th class=\"info-table__head-cell\">Разряд по скалолазанию</th><th class=\"info-table__head-cell\">Возраст</th><th class=\"info-table__head-cell\">Стаж в клубе</th><th class=\"info-table__head-cell\">Умеет вкусно готовить</th><th class=\"info-table__head-cell\">Умеет играть на гитаре</th></tr></thead><tbody class=\"info-table__body\"><tr class=\"info-table__row\"><td class=\"info-table__body-cell\">III разряд</td><td class=\"info-table__body-cell\">II разряд</td><td class=\"info-table__body-cell\">25 лет</td><td class=\"info-table__body-cell\">2 года</td><td class=\"info-table__body-cell\"><label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></td><td class=\"info-table__body-cell\"><label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></td></tr></tbody></table><ul class=\"member__info-list\"><li class=\"member__info-list-item\">Разряд по альпинизму: III разряд</li><li class=\"member__info-list-item\">Разряд по скалолазанию: II разряд</li><li class=\"member__info-list-item\">Возраст: 25 лет</li><li class=\"member__info-list-item\">Стаж в клубе: 2 года</li><li class=\"member__info-list-item\">Умеет вкусно готовить: <label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></li><li class=\"member__info-list-item\">Умеет играть на гитаре: <label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></li></ul></div></div><div class=\"member-trainer\"><div class=\"member__container\"><div class=\"member__person\"><h2 class=\"member__job\">Тренер новичков</h2><div class=\"user-profile\"><div class=\"user-profile__img-container\"><img class=\"user-profile__img\" src=\"../../images/catTrainer2.png\" alt=\"avatar\"/></div><div class=\"user-profile__info user-profile__info_grey-orange\"><div class=\"user-profile__name user-profile__name_grey-orange\">Елизавета Пушкова</div><div class=\"user-profile__spec user-profile__spec_grey-orange\">Тренер новичков</div><div class=\"icon__container\"><a class=\"user-profile__icon user-profile__icon_grey-orange\" href=\"/mock-address/change-me\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"user-profile__icon user-profile__icon_grey-orange user-profile__icon_grey-orange_red\" href=\"/mock-address/change-me\"><i class=\"fab fa-twitter\"></i></a><a class=\"user-profile__icon user-profile__icon_grey-orange\" href=\"/mock-address/change-me\"><i class=\"fas fa-basketball-ball\"></i></a></div></div></div></div><p class=\"member__text\">Эта женщина стала олицетворением мастерства скалолазания. Красивая и ловкая, она покоряла умопомрачительные для восьмидесятых годов маршруты. Елизавета Пушкова по праву считается одной из самых выдающихся скалолазок в мире,  и, несмотря на бурный прогресс в скалолазании, за последние двадцать лет, ее достижения впечатляют до сих пор.</p><blockquote class=\"member__about\">От себя: Мне страшно, когда я вижу в человеке безразличие ко всему, кроме себя. Хотелось бы, чтобы люди совершали гуманные поступки не потому, что так нужно и правильно, а откровенно, по велению души.</blockquote><table class=\"member__info-table\"><thead class=\"info-table__head\"><tr class=\"info-table__row\"><th class=\"info-table__head-cell\">Разряд по альпинизму</th><th class=\"info-table__head-cell\">Разряд по скалолазанию</th><th class=\"info-table__head-cell\">Возраст</th><th class=\"info-table__head-cell\">Стаж в клубе</th><th class=\"info-table__head-cell\">Умеет вкусно готовить</th><th class=\"info-table__head-cell\">Умеет играть на гитаре</th></tr></thead><tbody class=\"info-table__body\"><tr class=\"info-table__row\"><td class=\"info-table__body-cell\">II разряд</td><td class=\"info-table__body-cell\">Без разряда</td><td class=\"info-table__body-cell\">22 года</td><td class=\"info-table__body-cell\">5 лет</td><td class=\"info-table__body-cell\"><label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\" checked=\"checked\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></td><td class=\"info-table__body-cell\"><label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></td></tr></tbody></table><ul class=\"member__info-list\"><li class=\"member__info-list-item\">Разряд по альпинизму: II разряд</li><li class=\"member__info-list-item\">Разряд по скалолазанию: Без разряда</li><li class=\"member__info-list-item\">Возраст: 22 года</li><li class=\"member__info-list-item\">Стаж в клубе: 5 лет</li><li class=\"member__info-list-item\">Умеет вкусно готовить: <label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\" checked=\"checked\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></li><li class=\"member__info-list-item\">Умеет играть на гитаре: <label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></li></ul></div></div><div class=\"member-trainer\"><div class=\"member__container\"><div class=\"member__person\"><h2 class=\"member__job\">Тренер новичков</h2><div class=\"user-profile\"><div class=\"user-profile__img-container\"><img class=\"user-profile__img\" src=\"../../images/catTrainer3.png\" alt=\"avatar\"/></div><div class=\"user-profile__info user-profile__info_green-white\"><div class=\"user-profile__name user-profile__name_green-white\">Мустафа Мурмаметов</div><div class=\"user-profile__spec user-profile__spec_green-white\">Тренер новичков</div><div class=\"icon__container\"><a class=\"user-profile__icon user-profile__icon_green-white\" href=\"/mock-address/change-me\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"user-profile__icon user-profile__icon_green-white user-profile__icon_green-white_red\" href=\"/mock-address/change-me\"><i class=\"fab fa-twitter\"></i></a><a class=\"user-profile__icon user-profile__icon_green-white\" href=\"/mock-address/change-me\"><i class=\"fas fa-basketball-ball\"></i></a></div></div></div></div><p class=\"member__text\">Мустафа Мурмаметов был одним из лучших альпинистов ХХ века. Только он смог взойти на четыре восьмитысячника подряд за 80 дней. Он единственный человек в мире, кто двадцать один раз отправлялся наверх в &quot;зону смерти&quot; без кислородной маски. Практически на каждое свое восхождение он брал с собой флаг Казахстана.</p><blockquote class=\"member__about\">От себя: Альпинизм – очень рискованное занятие, которое, ни в коем случае, нельзя недооценивать, в не зависимости от того, насколько легким или неопасным выглядит выбранный пик.</blockquote><table class=\"member__info-table\"><thead class=\"info-table__head\"><tr class=\"info-table__row\"><th class=\"info-table__head-cell\">Разряд по альпинизму</th><th class=\"info-table__head-cell\">Разряд по скалолазанию</th><th class=\"info-table__head-cell\">Возраст</th><th class=\"info-table__head-cell\">Стаж в клубе</th><th class=\"info-table__head-cell\">Умеет вкусно готовить</th><th class=\"info-table__head-cell\">Умеет играть на гитаре</th></tr></thead><tbody class=\"info-table__body\"><tr class=\"info-table__row\"><td class=\"info-table__body-cell\">III разряд</td><td class=\"info-table__body-cell\">III разряд</td><td class=\"info-table__body-cell\">30 лет</td><td class=\"info-table__body-cell\">6 лет</td><td class=\"info-table__body-cell\"><label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></td><td class=\"info-table__body-cell\"><label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\" checked=\"checked\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></td></tr></tbody></table><ul class=\"member__info-list\"><li class=\"member__info-list-item\">Разряд по альпинизму: III разряд</li><li class=\"member__info-list-item\">Разряд по скалолазанию: III разряд</li><li class=\"member__info-list-item\">Возраст: 30 лет</li><li class=\"member__info-list-item\">Стаж в клубе: 6 лет</li><li class=\"member__info-list-item\">Умеет вкусно готовить: <label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></li><li class=\"member__info-list-item\">Умеет играть на гитаре: <label class=\"switch\"><input class=\"switch__toggle\" type=\"checkbox\" checked=\"checked\"/><span class=\"switch__slider\"><span class=\"switch__status switch__status_off\">OFF</span><span class=\"switch__status switch__status_on\">ON</span></span></label></li></ul></div></div></div></section><section class=\"member__section member__section_grid\"><div class=\"member__employee-container\"><div class=\"member__employee\"><h2 class=\"employee__job\">Кладовой</h2><div class=\"user-profile\"><div class=\"user-profile__img-container\"><img class=\"user-profile__img\" src=\"../../images/senya.png\" alt=\"avatar\"/></div><div class=\"user-profile__info user-profile__info_green-white\"><div class=\"user-profile__name user-profile__name_green-white\">Арсений Курьин</div><div class=\"user-profile__spec user-profile__spec_green-white\">Кладовой</div><div class=\"icon__container\"><a class=\"user-profile__icon user-profile__icon_green-white\" href=\"/mock-address/change-me\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"user-profile__icon user-profile__icon_green-white user-profile__icon_green-white_red\" href=\"/mock-address/change-me\"><i class=\"fab fa-twitter\"></i></a><a class=\"user-profile__icon user-profile__icon_green-white\" href=\"/mock-address/change-me\"><i class=\"fas fa-basketball-ball\"></i></a></div></div></div><p class=\"employee__about\">Пишем мне, если вам нужно снаряжение. Сдавать обратно лично мне в руки</p></div></div><div class=\"member__employee-container member__employee-container_bordered-on-desc\"><div class=\"member__employee\"><h2 class=\"employee__job\">Казначей</h2><div class=\"user-profile\"><div class=\"user-profile__img-container\"><img class=\"user-profile__img\" src=\"../../images/polya.png\" alt=\"avatar\"/></div><div class=\"user-profile__info user-profile__info_grey-orange\"><div class=\"user-profile__name user-profile__name_grey-orange\">Полина Майорова</div><div class=\"user-profile__spec user-profile__spec_grey-orange\">Казначей</div><div class=\"icon__container\"><a class=\"user-profile__icon user-profile__icon_grey-orange\" href=\"/mock-address/change-me\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"user-profile__icon user-profile__icon_grey-orange user-profile__icon_grey-orange_red\" href=\"/mock-address/change-me\"><i class=\"fab fa-twitter\"></i></a><a class=\"user-profile__icon user-profile__icon_grey-orange\" href=\"/mock-address/change-me\"><i class=\"fas fa-basketball-ball\"></i></a></div></div></div><p class=\"employee__about\">Каждый месяц сдаем членские взносы! Все взносы идут на нужны клуба.</p></div></div><div class=\"member__employee-container\"><div class=\"member__employee\"><h2 class=\"employee__job\">Вахтовик</h2><div class=\"user-profile\"><div class=\"user-profile__img-container\"><img class=\"user-profile__img\" src=\"../../images/ivan.png\" alt=\"avatar\"/></div><div class=\"user-profile__info user-profile__info_green-white\"><div class=\"user-profile__name user-profile__name_green-white\">Котейкин Иван</div><div class=\"user-profile__spec user-profile__spec_green-white\">Вахтовик</div><div class=\"icon__container\"><a class=\"user-profile__icon user-profile__icon_green-white\" href=\"/mock-address/change-me\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"user-profile__icon user-profile__icon_green-white user-profile__icon_green-white_red\" href=\"/mock-address/change-me\"><i class=\"fab fa-twitter\"></i></a><a class=\"user-profile__icon user-profile__icon_green-white\" href=\"/mock-address/change-me\"><i class=\"fas fa-basketball-ball\"></i></a></div></div></div><p class=\"employee__about\">Для получения пропуска через вахту, приносим мне две ваши фотографии 3:4.</p></div></div></section><section class=\"member__section\"><table class=\"rest-members\"><thead class=\"rest-members__head\"><tr class=\"rest-members__row\"><th class=\"rest-members__head-cell\">№</th><th class=\"rest-members__head-cell\">Ф.И.О.</th><th class=\"rest-members__head-cell\">Возраст</th><th class=\"rest-members__head-cell\">ВУЗ</th><th class=\"rest-members__head-cell\">Получаемая степень</th><th class=\"rest-members__head-cell\">Форма обучения</th></tr></thead><tbody><tr class=\"rest-members__row\"><td class=\"rest-members__cell\">1</td><td class=\"rest-members__cell\">Дягтеренко Аля Александровна</td><td class=\"rest-members__cell\">25 лет</td><td class=\"rest-members__cell\">ТПУ</td><td class=\"rest-members__cell\">Аспирантура</td><td class=\"rest-members__cell\">Очная (Бюджетная)</td></tr><tr class=\"rest-members__row\"><td class=\"rest-members__cell\">2</td><td class=\"rest-members__cell\">Вик Ксюша Анатольевна</td><td class=\"rest-members__cell\">18 лет</td><td class=\"rest-members__cell\">ТПУ</td><td class=\"rest-members__cell\">Бакалавриат</td><td class=\"rest-members__cell\">Очная (Бюджетная)</td></tr><tr class=\"rest-members__row\"><td class=\"rest-members__cell\">3</td><td class=\"rest-members__cell\">Морозов Олег Викторович</td><td class=\"rest-members__cell\">29 лет</td><td class=\"rest-members__cell\">ТГУ</td><td class=\"rest-members__cell\">Магистр</td><td class=\"rest-members__cell\">-</td></tr><tr class=\"rest-members__row\"><td class=\"rest-members__cell\">4</td><td class=\"rest-members__cell\">Павловец Женя Александрович</td><td class=\"rest-members__cell\">18 лет</td><td class=\"rest-members__cell\">ТПУ</td><td class=\"rest-members__cell\">Бакалавриат</td><td class=\"rest-members__cell\">Очная (Платная)</td></tr><tr class=\"rest-members__row\"><td class=\"rest-members__cell\">5</td><td class=\"rest-members__cell\">Паршина Женя Егоровна</td><td class=\"rest-members__cell\">18 лет</td><td class=\"rest-members__cell\">ТПУ</td><td class=\"rest-members__cell\">Бакалавриат</td><td class=\"rest-members__cell\">Очная (Платная)</td></tr><tr class=\"rest-members__row\"><td class=\"rest-members__cell\">6</td><td class=\"rest-members__cell\">Касымов Кувят Талгатович</td><td class=\"rest-members__cell\">25 лет</td><td class=\"rest-members__cell\">ТПУ</td><td class=\"rest-members__cell\">Аспирантура</td><td class=\"rest-members__cell\">Очная (Бюджетная)</td></tr><tr class=\"rest-members__row\"><td class=\"rest-members__cell\">7</td><td class=\"rest-members__cell\">Куприянова Ирина Олеговна</td><td class=\"rest-members__cell\">28 лет</td><td class=\"rest-members__cell\">ТГУ</td><td class=\"rest-members__cell\">Кандидат наук</td><td class=\"rest-members__cell\">-</td></tr><tr class=\"rest-members__row\"><td class=\"rest-members__cell\">8</td><td class=\"rest-members__cell\">Макаров Саша Васильевич</td><td class=\"rest-members__cell\">22 года</td><td class=\"rest-members__cell\">ТПУ</td><td class=\"rest-members__cell\">Магистратура</td><td class=\"rest-members__cell\">Очная (Платная)</td></tr><tr class=\"rest-members__row\"><td class=\"rest-members__cell\">9</td><td class=\"rest-members__cell\">Донцов Юрий Алексеевич</td><td class=\"rest-members__cell\">32 года</td><td class=\"rest-members__cell\">ТУСУР</td><td class=\"rest-members__cell\">Бакалавр</td><td class=\"rest-members__cell\">-</td></tr><tr class=\"rest-members__row\"><td class=\"rest-members__cell\">10</td><td class=\"rest-members__cell\">Карачурина Светлана Максимовна</td><td class=\"rest-members__cell\">21 год</td><td class=\"rest-members__cell\">ТПУ</td><td class=\"rest-members__cell\">Бакалавриат</td><td class=\"rest-members__cell\">Очная (Бюджетная)</td></tr></tbody></table></section></main><footer class=\"footer-container\"><div class=\"footer__container\"><section class=\"footer__container_contact\"><span class=\"footer__text footer__text_first\">Контактная информация:</span><span class=\"footer__text\">Лемешенко Никита</span><span class=\"footer__text\">Тел: +77056060155</span><span class=\"footer__text footer__text_last\">E-mail: allbehail@mail.ru</span></section><section class=\"footer__container_imgage\"><img class=\"footer__image\" src=\"../../images/alp-logo.gif\"/></section><section class=\"footer__container_adress\"><span class=\"footer__text\">Клуб расположен по адрессу:</span><span class=\"footer__text\">пр. Кирова 2 / пр. Ленина 45</span><span class=\"footer__text\">Общежитие ТПУ №2</span></section></div></footer><script src=\"members.bundle.js\"></script></body></html>"

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(17);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js?url=false!../../../node_modules/stylus-loader/index.js!./members.styl", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js?url=false!../../../node_modules/stylus-loader/index.js!./members.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 17:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myAudioPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sliders_sliders__ = __webpack_require__(19);


const myAudioPlayer = function() {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sliders_sliders__["a" /* sliderWithTrack */])();

  const activeSong = document.getElementById('song');
  const playBtn = document.getElementById('songPlay');
  const stopBtn = document.getElementById('songStop');
  const volumeBtn = document.getElementById('songVolume');
  const songTrack = document.getElementById('song-meter');
  const songVolume = document.getElementById('song-volume');

  const playOfPauseSong = function() {
    if (activeSong.paused) { 
      activeSong.play();
      playBtn.innerHTML = '<i class="fas fa-pause">';
    } else {
      activeSong.pause();
      playBtn.innerHTML = '<i class="fas fa-play">';
    }
  };

  const stopSong = function() {
    activeSong.pause();
    activeSong.currentTime = 0;
    playBtn.innerHTML = '<i class="fas fa-play">';
  };

  const updateTime = function() {
    const songTimer = document.querySelector('.audio__timer');
    let currentSeconds = (Math.floor(activeSong.currentTime % 60) < 10 ? '0' : '') + Math.floor(activeSong.currentTime % 60);
    let currentMinutes = Math.floor(activeSong.currentTime / 60);
    let percentageOfSong = (activeSong.currentTime / activeSong.duration) * 100;

    songTrack.value = percentageOfSong;
    songTimer.innerHTML = currentMinutes + ':' + currentSeconds;
  };

  const setLocation = function() {
    activeSong.currentTime = (songTrack.value / 100) * activeSong.duration; 
  };

  const toggleVolume = function() {
    if (activeSong.volume != 0) {
      activeSong.volume = 0;
      volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
    } else {
      activeSong.volume = 1;
      volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
  };

  const setVolume = function() {
    activeSong.volume = songVolume.value / 100;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  };

  const stopWhenTracking = function stopWhenTrackingStarts() {
    activeSong.pause();
    playBtn.innerHTML = '<i class="fas fa-pause">';
  };

  const playWhenTracking = function playWhenTrackingEnds() {
    activeSong.play();
    playBtn.innerHTML = '<i class="fas fa-play">';
  };

  playBtn.addEventListener('click', playOfPauseSong, false);
  stopBtn.addEventListener('click', stopSong, false);
  volumeBtn.addEventListener('click', toggleVolume, false);
  activeSong.addEventListener('timeupdate', updateTime, false);
  songTrack.addEventListener('click', setLocation, false);
  songTrack.addEventListener('mousedown', stopWhenTracking, false);
  songTrack.addEventListener('mouseup', playWhenTracking, false);
  songVolume.addEventListener('change', setVolume, false);
};




/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sliderWithTrack; });
const sliderWithTrack = function() {
	const sliderTracks = [...document.querySelectorAll('.slider_track')];

	const changeSliderTrack = function changeOnInputSliderTrack(event) {
    const target = event.target;
    let val = target.value;
		target.style.background = `-webkit-linear-gradient(left, #4eb7a8 0%, #4eb7a8 ${val}%, #e5e5e5 ${val}% ,#e5e5e5 100%)`;
	};

	sliderTracks.forEach((item) => {
		item.addEventListener('input', changeSliderTrack, false);
	});
};




/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./android-chrome-192x192.png": 7,
	"./android-chrome-512x512.png": 8,
	"./apple-touch-icon.png": 9,
	"./browserconfig.xml": 10,
	"./favicon-16x16.png": 11,
	"./favicon-32x32.png": 12,
	"./favicon.ico": 13,
	"./mstile-150x150.png": 14,
	"./safari-pinned-tab.svg": 15
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 20;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".search{display:flex;width:288px}@media screen and (max-width:480px){.search{width:170px}}.search__input{flex-basis:255px;border:none;border-radius:5px 0 0 5px;min-height:30px;padding:5px 0 7px 8px;font-family:SourceSansPro,Arial,sans-serif}.search__input font-size 1.4rem_grey{background:#f3ece8;color:#888}.search__input font-size 1.4rem_red{background:#e75735;color:#fff}.search__input font-size 1.4rem_red::placeholder{color:#fff}@media screen and (max-width:480px){.search__input{width:137px}}.search__button{flex-basis:33px;min-height:30px;background:#4b4b4b;border:none;outline:none;border-radius:0 5px 5px 0;color:#fff;cursor:pointer}.search__button:hover{background:#282828}.slider{-webkit-appearance:none;appearance:none;width:100%;max-width:37.14vw;height:5px;background:#e5e5e5;outline:none;border-radius:3px}.slider::-webkit-slider-thumb{position:relative;-webkit-appearance:none;appearance:none;width:19px;height:19px;border-radius:50%;cursor:pointer}.slider_red::-webkit-slider-thumb{background:#e75735}.slider_green::-webkit-slider-thumb{background:#4eb7a8}.slider_track{background:-webkit-linear-gradient(left,#4eb7a8,#4eb7a8 1%,#e5e5e5 0,#e5e5e5)}.slider__grade{display:none}.slider__grade_true{display:flex;justify-content:space-between;margin-top:12px;max-width:37.14vw;width:100%}.slider__value{color:#d1d1d1;font-size:1.1rem}.audio-player{display:flex;align-items:center}.audio__btn{font-size:1.4rem;background:#4b4b4b;padding:5px 10px;margin-right:5px;cursor:pointer;border-radius:5px;color:#fff}.audio__btn:hover{background:#282828}#songVolume{margin-left:5px;width:35px}.audio__slider{flex-grow:1}.audio__timer{height:28px;width:48px;font-family:Lato,Arial,sans-serif;font-weight:700;font-style:normal;font-size:1.4rem;color:#fff;text-align:center;background:#4b4b4b;border-radius:5px;margin-left:10px}.audio__timer:before{content:\"\";height:28px;display:inline-block;vertical-align:middle}.audio__volume-meter{margin-top:-5px}.header{width:100%;background-image:url(\"../../images/header.jpg\");background-repeat:no-repeat;background-size:cover;padding:2% 1% 10%}.menu{display:flex;justify-content:center;padding:0;margin:0}.menu__item{font-family:Lato,Arial,sans-serif;font-weight:400;font-style:normal;font-size:1.6rem;margin:0 1vw;padding:8px 15px;background:rgba(75,75,75,.5);text-align:center;border-radius:5px 5px 0 0;border:2px solid #282828;border-bottom:0;cursor:pointer;text-decoration:none;color:#f3ece8}.menu__item:hover{background:-webkit-linear-gradient(hsla(0,0%,49%,.5),rgba(45,45,45,.5))}@media screen and (max-width:480px){.menu__item{padding:5px;margin:0;font-size:1.3rem}}.header__board{display:grid;grid-template-columns:1fr 2fr 1fr;grid-template-rows:50px 80px auto;grid-template-areas:\"emblem search search\" \"text text text\" \"audio audio audio\";position:relative;width:100%;padding:10px;background:rgba(75,75,75,.5);border:2px solid #282828;border-radius:5px 5px 0 0}@media screen and (max-width:800px){.header__board{grid-template-rows:auto}}.header__emblem{display:inline-block;grid-area:emblem;background:url(\"../../images/emblem.png\") no-repeat 50% 50%;background-size:cover;height:80px;width:80px}@media screen and (max-width:480px){.header__emblem{height:50px;width:50px}}.header__text{display:inline-block;grid-area:text;align-self:start;font-family:Lato,Arial,sans-serif;font-weight:200;font-style:italic;font-size:4.5rem;color:#f3ece8;text-align:center}.header__search{grid-area:search;justify-self:end;align-self:start}.header__audio{grid-area:audio;justify-self:center}.footer__container{display:flex;justify-content:space-around;align-items:center;width:100%;padding:15px;background:#282828;font-family:Lato,Arial,sans-serif;font-weight:400;font-style:normal;font-size:1.2rem;color:#fff}.footer__container_adress{margin-left:10px}.footer__text{display:block;padding-bottom:5px}.footer__text_first{padding-bottom:10px}.footer__text_last{padding:0}.footer__container_imgage{width:160px;height:160px}.footer__image{width:100%;height:100%}@media screen and (max-width:700px){.footer__container_imgage{width:100px;height:100px}}.switch{display:inline-block;position:relative;height:24px;width:60px}.switch__toggle{display:none}.switch__slider{position:absolute;cursor:pointer;top:0;right:0;bottom:0;left:0;background:#e5e5e5;border-radius:16px;transition:.6s;text-align:right}.switch__slider:before{content:\"\";position:absolute;height:18px;width:18px;border-radius:50%;background:#fff;left:3px;top:3px;transition:.6s;z-index:999}.switch__toggle:checked+.switch__slider{background:#4eb7a8}.switch__toggle:checked+.switch__slider:before{transform:translateX(36px)}.switch__status{font-family:Conv_Lato-Black;font-size:12px;color:#fff;margin-top:5px}.switch__status_off{position:absolute;right:0;opacity:1;transition:.3s;margin-right:10px}.switch__status_on{position:absolute;left:0;opacity:0;transition:.3s;color:#fff;margin-left:10px}.switch__toggle:checked+.switch__slider>.switch__status_off{opacity:0}.switch__toggle:checked+.switch__slider>.switch__status_on{opacity:1}.member__container{width:100%;padding:25px 2%}.members__title{font-size:5rem;text-align:center;color:#282828;padding:20px 0 10px;margin:0}.member__person{display:flex;justify-content:space-around;align-items:center;width:50%;margin:0 auto}@media screen and (max-width:800px){.member__person{flex-direction:column;width:100%}}.member__job{font-size:2.4rem;color:#282828;margin:0;padding:0 0 15px}.member__text{font-size:1.6rem;color:#fff;background:#333;padding:15px 40px;margin:20px 0 0}@media screen and (max-width:800px){.member__text{padding:15px 20px}}.member__about{font-family:Lato,Arial,sans-serif;font-weight:400;font-style:italic;font-size:1.6rem;background:#999;border-radius:10px;padding:15px 40px;margin:30px 0 0}@media screen and (max-width:800px){.member__about{padding:15px 20px}}.member__info-table{border:1px solid #282828;border-collapse:collapse;margin:30px auto 0}@media screen and (max-width:480px){.member__info-table{display:none}}.member__info-table_all{width:90%}.info-table__head{background:#333;font-size:1.4rem;text-align:left;color:#fff}.info-table__head-cell{border:1px solid #282828;padding:12px 5px}.info-table__body-cell{font-size:1.4rem;border:1px solid #282828;background:#d8d8d8;color:#282828;padding:5px}.member__info-list{margin-top:30px}.member__info-list-item{display:none;font-size:1.6rem;margin-top:10px}@media screen and (max-width:480px){.member__info-list-item{display:flex;align-items:center}}.member__info-list-item .switch{margin-left:10px}.user-profile{min-width:300px}.user-profile__img-container{float:left;height:84px;width:84px;border:4px solid #e5e5e5;border-radius:50%}.user-profile__img{height:100%;width:100%;border-radius:50%}.user-profile__info{display:flex;flex-direction:column;align-items:center;min-width:163px;float:left;position:relative;border-radius:7px;border:none;margin-left:12px;padding:12px 16px 16px}.user-profile__info:before{position:absolute;top:45%;right:100%;margin-top:-3px;content:\"\";border-style:solid;border-width:5px}.user-profile__info_grey-orange{background:#e5e5e5}.user-profile__info_grey-orange:before{border-color:transparent #e5e5e5 transparent transparent}.user-profile__info_green-white{background:#4eb7a8}.user-profile__info_green-white:before{border-color:transparent #4eb7a8 transparent transparent}.user-profile__name{font-family:Lato,Arial,sans-serif;font-weight:400;font-style:normal;font-size:1.8rem}.user-profile__name_grey-orange{color:#e75735}.user-profile__name_green-white{color:#fff}.user-profile__spec{font-size:1.1rem;margin-top:6px}.user-profile__spec_grey-orange{color:#4f4f4f}.user-profile__spec_green-white{color:#fff}.icon__container{display:flex;justify-content:space-between;width:95px;margin-top:14px}.user-profile__icon{cursor:pointer;font-size:1.6rem}.user-profile__icon_grey-orange{color:#757575}.user-profile__icon_grey-orange:hover{color:#fff}.user-profile__icon_grey-orange_red{color:#e75735}.user-profile__icon_grey-orange_red:hover{color:#ffaf64}.user-profile__icon_green-white{color:#fff}.user-profile__icon_green-white:hover{color:#44f444}.member__employee{display:flex;flex-direction:column;align-items:center;flex-basis:33.3%;padding:0 20px}@media screen and (max-width:1200px){.member__employee{padding:0 20px}}.employee__job{font-size:2.4rem;color:#282828;margin:0;padding:0 0 15px}.employee__about{font-family:Lato,Arial,sans-serif;font-weight:400;font-style:italic;font-size:1.6rem;background:#999;border-radius:10px;padding:15px 40px;margin:20px 0 0}@media screen and (max-width:800px){.employee__about{padding:15px 20px}}.arw-btn{width:44px;height:44px;outline:none;cursor:pointer;border-radius:50%}.arw-btn_white{background-color:#fff;border:2px solid #4eb7a8}.arw-btn_white:active{background-color:#4eb7a8;border:2px solid #4eb7a8}.arw-btn_white:active .arw-btn__text_white{border-color:#fff}.arw-btn_green{background-color:#4eb7a8;border:2px solid #4eb7a8}.arw-btn_green:active{background-color:#fff;border:2px solid #4eb7a8}.arw-btn_green:active .arw-btn__text_green{border-color:#4eb7a8}.arw-btn_grey{background-color:#e5e5e5;border:2px solid #e5e5e5}.arw-btn_left{transform:rotate(135deg)}.arw-btn_right{transform:rotate(-45deg)}.arw-btn__text_white{border:solid #4eb7a8;display:inline-block;padding:6px;border-width:0 2px 2px 0}.arw-btn__text_white:active{border-color:#fff}.arw-btn__text_green{border:solid #fff;display:inline-block;padding:6px;border-width:0 2px 2px 0}.arw-btn__text_green:active{border-color:#4eb7a8}.arw-btn__text_grey{border:solid #fff;display:inline-block;padding:6px;border-width:0 2px 2px 0}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-Black.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-Black.woff\") format(\"woff\"),url(\"../../fonts/Lato-Black.ttf\") format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-BlackItalic.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-BlackItalic.woff\") format(\"woff\"),url(\"../../fonts/Lato-BlackItalic.ttf\") format(\"truetype\");font-weight:900;font-style:italic}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-Bold.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-Bold.woff\") format(\"woff\"),url(\"../../fonts/Lato-Bold.ttf\") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-BoldItalic.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-BoldItalic.woff\") format(\"woff\"),url(\"../../fonts/Lato-BoldItalic.ttf\") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-Hairline.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-Hairline.woff\") format(\"woff\"),url(\"../../fonts/Lato-Hairline.ttf\") format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-HairlineItalic.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-HairlineItalic.woff\") format(\"woff\"),url(\"../../fonts/Lato-HairlineItalic.ttf\") format(\"truetype\");font-weight:100;font-style:italic}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-Heavy.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-Heavy.woff\") format(\"woff\"),url(\"../../fonts/Lato-Heavy.ttf\") format(\"truetype\");font-weight:800;font-style:normal}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-HeavyItalic.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-HeavyItalic.woff\") format(\"woff\"),url(\"../../fonts/Lato-HeavyItalic.ttf\") format(\"truetype\");font-weight:800;font-style:italic}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-Italic.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-Italic.woff\") format(\"woff\"),url(\"../../fonts/Lato-Italic.ttf\") format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-Light.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-Light.woff\") format(\"woff\"),url(\"../../fonts/Lato-Light.ttf\") format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-LightItalic.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-LightItalic.woff\") format(\"woff\"),url(\"../../fonts/Lato-LightItalic.ttf\") format(\"truetype\");font-weight:300;font-style:italic}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-Medium.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-Medium.woff\") format(\"woff\"),url(\"../../fonts/Lato-Medium.ttf\") format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-MediumItalic.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-MediumItalic.woff\") format(\"woff\"),url(\"../../fonts/Lato-MediumItalic.ttf\") format(\"truetype\");font-weight:500;font-style:italic}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-Regular.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-Regular.woff\") format(\"woff\"),url(\"../../fonts/Lato-Regular.ttf\") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-Semibold.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-Semibold.woff\") format(\"woff\"),url(\"../../fonts/Lato-Semibold.ttf\") format(\"truetype\");font-weight:600;font-style:normal}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-SemiboldItalic.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-SemiboldItalic.woff\") format(\"woff\"),url(\"../../fonts/Lato-SemiboldItalic.ttf\") format(\"truetype\");font-weight:600;font-style:italic}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-Thin.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-Thin.woff\") format(\"woff\"),url(\"../../fonts/Lato-Thin.ttf\") format(\"truetype\");font-weight:200;font-style:normal}@font-face{font-family:Lato;src:url(\"../../fonts/Lato-ThinItalic.eot\");src:local(\"\\263A\"),url(\"../../fonts/Lato-ThinItalic.woff\") format(\"woff\"),url(\"../../fonts/Lato-ThinItalic.ttf\") format(\"truetype\");font-weight:200;font-style:italic}@font-face{font-family:Myriad Pro SemiExtended;src:url(\"../../fonts/Myriad Pro Bold SemiExtended.eot\");src:local(\"\\263A\"),url(\"../../fonts/Myriad Pro Bold SemiExtended.woff\") format(\"woff\"),url(\"../../fonts/Myriad Pro Bold SemiExtended.ttf\") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Myriad Pro SemiExtended;src:url(\"../../fonts/Myriad Pro Light SemiExtended.eot\");src:local(\"\\263A\"),url(\"../../fonts/Myriad Pro Light SemiExtended.woff\") format(\"woff\"),url(\"../../fonts/Myriad Pro Light SemiExtended.ttf\") format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:MyriadPro SemiCn;src:url(\"../../fonts/MyriadPro BlackSemiCn.eot\");src:local(\"\\263A\"),url(\"../../fonts/MyriadPro BlackSemiCn.woff\") format(\"woff\"),url(\"../../fonts/MyriadPro BlackSemiCn.ttf\") format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:MyriadPro;src:url(\"../../fonts/MyriadPro Bold.eot\");src:local(\"\\263A\"),url(\"../../fonts/MyriadPro Bold.woff\") format(\"woff\"),url(\"../../fonts/MyriadPro Bold.ttf\") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:MyriadPro;src:url(\"../../fonts/MyriadPro Regular.eot\");src:local(\"\\263A\"),url(\"../../fonts/MyriadPro Regular.woff\") format(\"woff\"),url(\"../../fonts/MyriadPro Regular.ttf\") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:SourceSansPro;src:url(\"../../fonts/SourceSansPro-Regular.eot\");src:local(\"\\263A\"),url(\"../../fonts/SourceSansPro-Regular.woff\") format(\"woff\"),url(\"../../fonts/SourceSansPro-Regular.ttf\") format(\"truetype\");font-weight:400;font-style:normal}*{box-sizing:border-box}html{font-family:SourceSansPro,Arial,sans-serif;font-size:62.5%;color:#282828;background:#fff}body{padding:0;margin:0}.main-content-container{padding:0 0 40px}.member__section{border-top:2px solid #282828}.member__section_relative{position:relative;width:100%;overflow:hidden}.member__section_grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));padding:25px 2%}.member__btn{padding:25px 2%;position:absolute;top:25px;z-index:999}.member__btn_left{left:2%}.member__btn_right{right:2%}.member-trainers__flex-container{display:flex;flex-wrap:nowrap;transition:.5s}.member-trainer{flex-basis:100%;flex-shrink:0}.member__employee-container{flex-basis:33.3%;padding-bottom:20px}@media screen and (min-width:1000px){.member__employee-container_bordered-on-desc{border-left:2px solid #282828;border-right:2px solid #282828}}.rest-members{border-collapse:collapse;margin:20px auto 0}.rest-members__head{background:#333;font-size:1.4rem;text-align:left;color:#fff}.rest-members__head-cell{border:1px solid #282828;padding:5px}@media screen and (max-width:480px){.rest-members__head-cell{font-size:1.2rem;padding:5px 1px}}.rest-members__cell{font-size:1.4rem;border:1px solid #282828;background:#d8d8d8;color:#282828;padding:5px}@media screen and (max-width:480px){.rest-members__cell{font-size:1.2rem;padding:5px 1px}}", ""]);

// exports


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_header_header_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicons_favicons__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicons_favicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__favicons_favicons__);



const html = __webpack_require__(158);
const css = __webpack_require__(163);

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


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_player_audio_player__ = __webpack_require__(18);


(function() {
  document.onload = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__audio_player_audio_player__["a" /* myAudioPlayer */])();
}());


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

const faviconsContext = __webpack_require__(20);
faviconsContext.keys().forEach(faviconsContext);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/android-chrome-192x192.png";

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/android-chrome-512x512.png";

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/apple-touch-icon.png";

/***/ })

/******/ });