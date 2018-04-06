import greet from './greeter.js';
import '../blocks/gallery/gallery.js';
import '../blocks/gallery/lightbox-plus-jquery.min.js';
import '../blocks/header/header.js';
import '../blocks/sliders/sliders.js';

var html = require('../index.pug');
const css = require('../index.styl');

console.log("I'm the enty point");
greet();