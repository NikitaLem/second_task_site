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
/******/ 	return __webpack_require__(__webpack_require__.s = 301);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audio_player_audio_player__ = __webpack_require__(22);


(function() {
  document.onload = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__audio_player_audio_player__["a" /* myAudioPlayer */])();
}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const faviconsContext = __webpack_require__(24);
faviconsContext.keys().forEach(faviconsContext);

/***/ }),
/* 5 */,
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/android-chrome-192x192.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/android-chrome-512x512.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/apple-touch-icon.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/browserconfig.xml";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon-16x16.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon-32x32.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon.ico";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/mstile-150x150.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/safari-pinned-tab.svg";

/***/ }),
/* 17 */
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

var	fixUrls = __webpack_require__(18);

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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/SourceSansPro-Regular.eot";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/SourceSansPro-Regular.ttf";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/SourceSansPro-Regular.woff";

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myAudioPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sliders_sliders__ = __webpack_require__(23);


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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./android-chrome-192x192.png": 8,
	"./android-chrome-512x512.png": 9,
	"./apple-touch-icon.png": 10,
	"./browserconfig.xml": 11,
	"./favicon-16x16.png": 12,
	"./favicon-32x32.png": 13,
	"./favicon.ico": 14,
	"./mstile-150x150.png": 15,
	"./safari-pinned-tab.svg": 16
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
webpackContext.id = 24;

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/emblem.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/header.jpg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Black.eot";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Black.ttf";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Black.woff";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-BlackItalic.eot";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-BlackItalic.ttf";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-BlackItalic.woff";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Bold.eot";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Bold.ttf";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Bold.woff";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-BoldItalic.eot";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-BoldItalic.ttf";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-BoldItalic.woff";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Hairline.eot";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Hairline.ttf";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Hairline.woff";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-HairlineItalic.eot";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-HairlineItalic.ttf";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-HairlineItalic.woff";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Heavy.eot";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Heavy.ttf";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Heavy.woff";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-HeavyItalic.eot";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-HeavyItalic.ttf";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-HeavyItalic.woff";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Italic.eot";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Italic.ttf";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Italic.woff";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Light.eot";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Light.ttf";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Light.woff";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-LightItalic.eot";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-LightItalic.ttf";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-LightItalic.woff";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Medium.eot";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Medium.ttf";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Medium.woff";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-MediumItalic.eot";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-MediumItalic.ttf";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-MediumItalic.woff";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Regular.eot";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Regular.ttf";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Regular.woff";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Semibold.eot";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Semibold.ttf";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Semibold.woff";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-SemiboldItalic.eot";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-SemiboldItalic.ttf";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-SemiboldItalic.woff";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Thin.eot";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Thin.ttf";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-Thin.woff";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-ThinItalic.eot";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-ThinItalic.ttf";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Lato-ThinItalic.woff";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Myriad Pro Bold SemiExtended.eot";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Myriad Pro Bold SemiExtended.ttf";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Myriad Pro Bold SemiExtended.woff";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Myriad Pro Light SemiExtended.eot";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Myriad Pro Light SemiExtended.ttf";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Myriad Pro Light SemiExtended.woff";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro BlackSemiCn.eot";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro BlackSemiCn.ttf";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro BlackSemiCn.woff";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro Bold.eot";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro Bold.ttf";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro Bold.woff";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro Regular.eot";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro Regular.ttf";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/MyriadPro Regular.woff";

/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html><!DOCTYPE js><html lang=\"en\"><head><meta charset=\"UTF-8\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"/><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"../../favicons/apple-touch-icon.png\"/><link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"../../favicons/favicon-32x32.png\"/><link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"../../favicons/favicon-16x16.png\"/><link rel=\"manifest\" href=\"../../favicons/site.webmanifest\"/><link rel=\"mask-icon\" href=\"../../favicons/safari-pinned-tab.svg\" color=\"#5bbad5\"/><meta name=\"msapplication-TileColor\" content=\"#da532c\"/><meta name=\"theme-color\" content=\"#ffffff\"/><title>My Site</title></head><body><script src=\"https://use.fontawesome.com/releases/v5.0.7/js/all.js\" defer=\"defer\"></script><script defer=\"defer\" src=\"https://use.fontawesome.com/releases/v5.0.9/js/all.js\" integrity=\"sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl\" crossorigin=\"anonymous\"></script><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"/><header><section class=\"header\"><nav class=\"menu\"><a class=\"menu__item\" href=\"../../index.html\">Главная</a><a class=\"menu__item\" href=\"../gallery/gallery.html\">Галлерея</a><a class=\"menu__item\" href=\"../members/members.html\">Клубяне</a><a class=\"menu__item\" href=\"../keldim/keldim.html\">Склад</a><a class=\"menu__item\" href=\"../about/about.html\">О нас</a></nav><article class=\"header__board\"><div class=\"header__emblem\"></div><div class=\"header__text\">Альп-клуб ENERGY</div><div class=\"header__search\"><form class=\"search-form\"><div class=\"search\"><input class=\"search__input search__input_grey\" type=\"search\" placeholder=\"Search...\" name=\"search\" maxlength=\"37\" autocomplete=\"on\"/><button class=\"search__button\" type=\"submit\"><i class=\"fa fa-search\"></i></button></div></form></div><div class=\"header__audio\"><section class=\"audio-player\"><audio class=\"audio\" id=\"song\" preload=\"metadata\"><source src=\"../../audio/Vladimir Visockiy - Zdes' vam ne ravnina.mp3\" type=\"audio/mpeg\"/></audio><div class=\"audio__btn\" id=\"songPlay\"> <i class=\"fas fa-play\"></i></div><div class=\"audio__btn\" id=\"songStop\"><i class=\"fas fa-stop\"></i></div><div class=\"audio__slider\"><form class=\"slider-form\"><input class=\"slider slider_red slider_nopopup slider_none\" id=\"song-meter\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" step=\"1\"/><div class=\"slider__grade slider__grade_none\"><span class=\"slider__value\">0</span><span class=\"slider__value\">25</span><span class=\"slider__value\">50</span><span class=\"slider__value\">75</span><span class=\"slider__value\">100</span></div></form></div><div class=\"audio__timer\">0:00</div><div class=\"audio__btn\" id=\"songVolume\"><i class=\"fas fa-volume-up\"></i></div><div class=\"audio__volume-meter\"><form class=\"slider-form\"><input class=\"slider slider_green slider_none slider_track\" id=\"song-volume\" type=\"range\" value=\"0\" min=\"0\" max=\"100\" step=\"1\"/><div class=\"slider__grade slider__grade_grade\"><span class=\"slider__value\">0</span><span class=\"slider__value\">25</span><span class=\"slider__value\">50</span><span class=\"slider__value\">75</span><span class=\"slider__value\">100</span></div></form></div></section></div></article></section></header><main><h1 class=\"about__title\">О нашем клубе</h1><p class=\"about__text\">Спортивный клуб ENERGY был создан 10 октября 1973 года. Главные направления занятий клуба это альпинизм, скалолазание и ледолазание. Так же мы занимаемся спелеологией, туризмом, велоспортом, горными лыжами, сноубордом, слэклайном и многими другими видами спорта.<br><br>Integer rhoncus dapibus ultrices. Aliquam a tristique tortor. Fusce vel suscipit libero. Nunc et sapien nulla. Vestibulum arcu odio, luctus nec luctus vitae, convallis quis nunc. Praesent varius justo non orci porta pellentesque. In quis ex metus. Phasellus pretium placerat scelerisque. Proin imperdiet, quam vitae euismod ultrices, velit nibh fringilla sapien, et dictum erat mi ut magna. Donec ac porta felis. Ut a porttitor velit. Sed volutpat dictum nulla ut interdum. Aliquam id nisi vitae nibh dictum vestibulum ac et augue. Pellentesque nec purus dictum, fringilla sapien et, fringilla libero. Duis ullamcorper lorem eu sapien imperdiet euismod. Sed rhoncus neque non neque finibus, nec pretium est malesuada.</p><div class=\"about__parallax about__parallax_first\"></div><p class=\"about__text\">Начальный состав клуба ограничивался небольшой группой спелеологов, что и сформировало первое направление развития. В то время участники преодолевали большие трудности со снаряжением, описанием пещер и маршрутов и прочим. Но все трудности пали перед этими молодыми ребятами: всё создавалось своими руками - и снаряжение, и карты, и описания маршрутов. И всё ради пещер, ведь главное в нашем деле - энтузиазизм и воля к победе! Почти сразу к спелеологии присоединилось родственное скалолазание. Позже - альпинизм - самый суровый и экстремальный вид спорта.<br><br>Integer rhoncus dapibus ultrices. Aliquam a tristique tortor. Fusce vel suscipit libero. Nunc et sapien nulla. Vestibulum arcu odio, luctus nec luctus vitae, convallis quis nunc. Praesent varius justo non orci porta pellentesque. In quis ex metus. Phasellus pretium placerat scelerisque. Proin imperdiet, quam vitae euismod ultrices, velit nibh fringilla sapien, et dictum erat mi ut magna. Donec ac porta felis. Ut a porttitor velit. Sed volutpat dictum nulla ut interdum. Aliquam id nisi vitae nibh dictum vestibulum ac et augue. Pellentesque nec purus dictum, fringilla sapien et, fringilla libero.</p><div class=\"about__parallax about__parallax_second\"></div><p class=\"about__text\">За годы существования клуба мы обзавелись своими традициями, отличительными чертами и методами работы с новичками. Сегодня мы стройная организация со строгими правилами и огромным потенциалом. С каждым годом увеличиваются наборы новичков, а значит, увеличивается интерес к нашим видам спорта. Мы можем предложить практически всё, что нужно молодым (и не очень) парням и девчонкам. А именно: спорт, отдых, тёплую компанию и верных друзей. Не это ли важно сегодня?</p><section class=\"about__video-container\"><div class=\"video\"><iframe width=\"594\" height=\"336\" src=\"https://www.youtube.com/embed/jL1zVdj1kcs\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></div></section><section class=\"about__location-wrapper\"><p class=\"about__text about__text_location\">Нас можно найти по адресу: Россия, Томская область, г.Томск, пр. Кирова, 2. Цокольный этаж, вход через вахту.</p><div class=\"map-flex__container\"><div class=\"about__map-container\"><script src=\"https://use.fontawesome.com/releases/v5.0.7/js/all.js\" defer=\"defer\"></script><div class=\"location__map\" id=\"map\">Map</div><div class=\"location__bar\"><div class=\"location__info\"><div class=\"location__message\">Meet us!</div><div class=\"location__address\">2 KIROV ST TOMSK, RF</div></div><div class=\"location__button-container\">  <button class=\"location__button location__mark\" id=\"mark\"><i class=\"fas fa-map-marker-alt\"></i></button><button class=\"location__button location__center\" id=\"center\"><i class=\"fas fa-crosshairs\"></i></button></div></div><script>function myMap() {\n    var mapCanvas = document.getElementById(\"map\");\n    var myCenter = new google.maps.LatLng(56.4669, 84.9513);\n    var mapOptions = {\n        center: myCenter,\n        zoom: 17\n    };\n    var map = new google.maps.Map(mapCanvas, mapOptions);\n    var marker = new google.maps.Marker({\n        position: myCenter, \n        icon: \"../../images/14.png\",\n        animation: google.maps.Animation.DROP,\n        draggable: true\n        });\n    marker.setMap(map);\n    var btnMark = document.getElementById('mark');\n    var btnCenter = document.getElementById('center');\n\n    btnMark.addEventListener('click', setMark, false);\n    btnCenter.addEventListener('click', returnToCenter, false);\n\n    function setMark() {    \n        marker.position = map.getCenter();\n        marker.setMap(map);\n    }\n\n    function returnToCenter() {\n        map.panTo(myCenter);\n    }\n}</script><script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBuI7KLAnp1-V15NterLpZP-TtTsgT_PTM&amp;callback=myMap\"></script></div><div class=\"about__map-admin\"><p class=\"about__text about__text_location about__text_nopadding-left\">За выдачей пропусков обращаться к Котейкину Ивану.</p><div class=\"user-profile\"><div class=\"user-profile__img-container\"><img class=\"user-profile__img\" src=\"../../images/ivan.png\" alt=\"avatar\"/></div><div class=\"user-profile__info user-profile__info_grey-orange\"><div class=\"user-profile__name user-profile__name_grey-orange\">Котейкин Иван</div><div class=\"user-profile__spec user-profile__spec_grey-orange\">Вахтовик</div><div class=\"icon__container\"><a class=\"user-profile__icon user-profile__icon_grey-orange\" href=\"/mock-address/change-me\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"user-profile__icon user-profile__icon_grey-orange user-profile__icon_grey-orange_red\" href=\"/mock-address/change-me\"><i class=\"fab fa-twitter\"></i></a><a class=\"user-profile__icon user-profile__icon_grey-orange\" href=\"/mock-address/change-me\"><i class=\"fas fa-basketball-ball\"></i></a></div></div></div></div></div></section></main><footer><div class=\"footer__container\"><section class=\"footer__container_contact\"><span class=\"footer__text footer__text_first\">Контактная информация:</span><span class=\"footer__text\">Лемешенко Никита</span><span class=\"footer__text\">Тел: +77056060155</span><span class=\"footer__text footer__text_last\">E-mail: allbehail@mail.ru</span></section><section class=\"footer__container_imgage\"><img class=\"footer__image\" src=\"../../images/alp-logo.gif\"/></section><section class=\"footer__container_adress\"><span class=\"footer__text\">Клуб расположен по адрессу:</span><span class=\"footer__text\">пр. Кирова 2 / пр. Ленина 45</span><span class=\"footer__text\">Общежитие ТПУ №2</span></section></div></footer><script src=\"about.bundle.js\"></script></body></html>"

/***/ }),
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(289);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/stylus-loader/index.js!./about.styl", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/stylus-loader/index.js!./about.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(7);
exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".search{display:flex;width:288px}@media screen and (max-width:480px){.search{width:170px}}.search__input{flex-basis:255px;border:none;border-radius:5px 0 0 5px;min-height:30px;padding:5px 0 7px 8px;font-family:SourceSansPro,Arial,sans-serif}.search__input font-size 1.4rem_grey{background:#f3ece8;color:#888}@media screen and (max-width:480px){.search__input{width:137px}}.search__button{flex-basis:33px;min-height:30px;background:#4b4b4b;border:none;outline:none;border-radius:0 5px 5px 0;color:#fff;cursor:pointer}.search__button:hover{background:#282828}.slider{-webkit-appearance:none;appearance:none;width:100%;max-width:37.14vw;height:5px;background:#e5e5e5;outline:none;border-radius:3px}.slider::-webkit-slider-thumb{position:relative;-webkit-appearance:none;appearance:none;width:19px;height:19px;border-radius:50%;cursor:pointer}.slider_red::-webkit-slider-thumb{background:#e75735}.slider_green::-webkit-slider-thumb{background:#4eb7a8}.slider_track{background:-webkit-linear-gradient(left,#4eb7a8,#4eb7a8 1%,#e5e5e5 0,#e5e5e5)}.slider__grade{display:none}.slider__grade_true{display:flex;justify-content:space-between;margin-top:12px;max-width:37.14vw;width:100%}.slider__value{color:#d1d1d1;font-size:1.1rem}.audio-player{display:flex;align-items:center}.audio__btn{font-size:1.4rem;background:#4b4b4b;padding:5px 10px;margin-right:5px;cursor:pointer;border-radius:5px;color:#fff}.audio__btn:hover{background:#282828}#songVolume{margin-left:5px;width:35px}.audio__slider{flex-grow:1}.audio__timer{height:28px;width:48px;font-family:Lato,Arial,sans-serif;font-weight:700;font-style:normal;font-size:1.4rem;color:#fff;text-align:center;background:#4b4b4b;border-radius:5px;margin-left:10px}.audio__timer:before{content:\"\";height:28px;display:inline-block;vertical-align:middle}.audio__volume-meter{margin-top:-5px}.header{width:100%;background-image:url(" + escape(__webpack_require__(27)) + ");background-repeat:no-repeat;background-size:cover;padding:2% 1% 10%}.menu{display:flex;justify-content:center;padding:0;margin:0}.menu__item{font-family:Lato,Arial,sans-serif;font-weight:400;font-style:normal;font-size:1.6rem;margin:0 1vw;padding:8px 15px;background:rgba(75,75,75,.5);text-align:center;border-radius:5px 5px 0 0;border:2px solid #282828;border-bottom:0;cursor:pointer;text-decoration:none;color:#f3ece8}.menu__item:hover{background:-webkit-linear-gradient(hsla(0,0%,49%,.5),rgba(45,45,45,.5))}@media screen and (max-width:480px){.menu__item{padding:5px;margin:0;font-size:1.3rem}}.header__board{display:grid;grid-template-columns:1fr 2fr 1fr;grid-template-rows:50px 80px auto;grid-template-areas:\"emblem search search\" \"text text text\" \"audio audio audio\";position:relative;width:100%;padding:10px;background:rgba(75,75,75,.5);border:2px solid #282828;border-radius:5px 5px 0 0}@media screen and (max-width:800px){.header__board{grid-template-rows:auto}}.header__emblem{display:inline-block;grid-area:emblem;background:url(" + escape(__webpack_require__(26)) + ") no-repeat 50% 50%;background-size:cover;height:80px;width:80px}@media screen and (max-width:480px){.header__emblem{height:50px;width:50px}}.header__text{display:inline-block;grid-area:text;align-self:start;font-family:Lato,Arial,sans-serif;font-weight:200;font-style:italic;font-size:4.5rem;color:#f3ece8;text-align:center}.header__search{grid-area:search;justify-self:end;align-self:start}.header__audio{grid-area:audio;justify-self:center}.footer__container{display:flex;justify-content:space-around;align-items:center;width:100%;padding:15px;background:#282828;font-family:Lato,Arial,sans-serif;font-weight:400;font-style:normal;font-size:1.2rem;color:#fff}.footer__container_adress{margin-left:10px}.footer__text{display:block;padding-bottom:5px}.footer__text_first{padding-bottom:10px}.footer__text_last{padding:0}.footer__container_imgage{width:160px;height:160px}@media screen and (max-width:700px){.footer__container_imgage{width:100px;height:100px}}.footer__image{width:100%;height:100%}.user-profile{min-width:300px}.user-profile__img-container{float:left;height:84px;width:84px;border:4px solid #e5e5e5;border-radius:50%}.user-profile__img{height:100%;width:100%;border-radius:50%}.user-profile__info{display:flex;flex-direction:column;align-items:center;min-width:163px;float:left;position:relative;border-radius:7px;border:none;margin-left:12px;padding:12px 16px 16px}.user-profile__info:before{position:absolute;top:45%;right:100%;margin-top:-3px;content:\"\";border-style:solid;border-width:5px}.user-profile__info_grey-orange{background:#e5e5e5}.user-profile__info_grey-orange:before{border-color:transparent #e5e5e5 transparent transparent}.user-profile__info_green-white{background:#4eb7a8}.user-profile__info_green-white:before{border-color:transparent #4eb7a8 transparent transparent}.user-profile__name{font-family:Lato,Arial,sans-serif;font-weight:400;font-style:normal;font-size:1.8rem}.user-profile__name_grey-orange{color:#e75735}.user-profile__name_green-white{color:#fff}.user-profile__spec{font-size:1.1rem;margin-top:6px}.user-profile__spec_grey-orange{color:#4f4f4f}.user-profile__spec_green-white{color:#fff}.icon__container{display:flex;justify-content:space-between;width:95px;margin-top:14px}.user-profile__icon{cursor:pointer;font-size:1.6rem}.user-profile__icon_grey-orange{color:#757575}.user-profile__icon_grey-orange:hover{color:#fff}.user-profile__icon_grey-orange_red{color:#e75735}.user-profile__icon_grey-orange_red:hover{color:#ffaf64}.user-profile__icon_green-white{color:#fff}.user-profile__icon_green-white:hover{color:#44f444}.video{border-radius:5px;overflow:hidden}.location__map{width:100%;height:200px;border-radius:5px 5px 0 0}.location__bar{position:relative;justify-content:space-between;width:100%;height:80px;background:#e75735;border-radius:0 0 5px 5px}.location__bar,.location__info{display:flex;align-items:center}.location__message{font-family:Lato,Arial,sans-serif;font-weight:300;font-style:normal;font-size:5rem;text-align:center;color:#fff;margin-left:3.85vw}@media screen and (max-width:830px){.location__message{font-size:3rem}}.location__address{font-family:Lato,Arial,sans-serif;font-weight:900;font-style:normal;font-size:2rem;color:#fff;margin-left:2.85vw}@media screen and (max-width:830px){.location__address{font-size:1.4rem}}.location__button-container{display:flex;justify-content:space-around}.location__button{border:none;outline:none;cursor:pointer;background:#e75735;color:#fff;margin-right:10px;font-size:3.4rem}@media screen and (max-width:830px){.location__button{font-size:2rem;margin-right:0}}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(28)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(30)) + ") format(\"woff\"),url(" + escape(__webpack_require__(29)) + ") format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(31)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(33)) + ") format(\"woff\"),url(" + escape(__webpack_require__(32)) + ") format(\"truetype\");font-weight:900;font-style:italic}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(34)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(36)) + ") format(\"woff\"),url(" + escape(__webpack_require__(35)) + ") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(37)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(39)) + ") format(\"woff\"),url(" + escape(__webpack_require__(38)) + ") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(40)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(42)) + ") format(\"woff\"),url(" + escape(__webpack_require__(41)) + ") format(\"truetype\");font-weight:100;font-style:normal}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(43)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(45)) + ") format(\"woff\"),url(" + escape(__webpack_require__(44)) + ") format(\"truetype\");font-weight:100;font-style:italic}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(46)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(48)) + ") format(\"woff\"),url(" + escape(__webpack_require__(47)) + ") format(\"truetype\");font-weight:800;font-style:normal}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(49)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(51)) + ") format(\"woff\"),url(" + escape(__webpack_require__(50)) + ") format(\"truetype\");font-weight:800;font-style:italic}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(52)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(54)) + ") format(\"woff\"),url(" + escape(__webpack_require__(53)) + ") format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(55)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(57)) + ") format(\"woff\"),url(" + escape(__webpack_require__(56)) + ") format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(58)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(60)) + ") format(\"woff\"),url(" + escape(__webpack_require__(59)) + ") format(\"truetype\");font-weight:300;font-style:italic}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(61)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(63)) + ") format(\"woff\"),url(" + escape(__webpack_require__(62)) + ") format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(64)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(66)) + ") format(\"woff\"),url(" + escape(__webpack_require__(65)) + ") format(\"truetype\");font-weight:500;font-style:italic}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(67)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(69)) + ") format(\"woff\"),url(" + escape(__webpack_require__(68)) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(70)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(72)) + ") format(\"woff\"),url(" + escape(__webpack_require__(71)) + ") format(\"truetype\");font-weight:600;font-style:normal}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(73)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(75)) + ") format(\"woff\"),url(" + escape(__webpack_require__(74)) + ") format(\"truetype\");font-weight:600;font-style:italic}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(76)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(78)) + ") format(\"woff\"),url(" + escape(__webpack_require__(77)) + ") format(\"truetype\");font-weight:200;font-style:normal}@font-face{font-family:Lato;src:url(" + escape(__webpack_require__(79)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(81)) + ") format(\"woff\"),url(" + escape(__webpack_require__(80)) + ") format(\"truetype\");font-weight:200;font-style:italic}@font-face{font-family:Myriad Pro SemiExtended;src:url(" + escape(__webpack_require__(82)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(84)) + ") format(\"woff\"),url(" + escape(__webpack_require__(83)) + ") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:Myriad Pro SemiExtended;src:url(" + escape(__webpack_require__(85)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(87)) + ") format(\"woff\"),url(" + escape(__webpack_require__(86)) + ") format(\"truetype\");font-weight:300;font-style:normal}@font-face{font-family:MyriadPro SemiCn;src:url(" + escape(__webpack_require__(88)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(90)) + ") format(\"woff\"),url(" + escape(__webpack_require__(89)) + ") format(\"truetype\");font-weight:900;font-style:normal}@font-face{font-family:MyriadPro;src:url(" + escape(__webpack_require__(91)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(93)) + ") format(\"woff\"),url(" + escape(__webpack_require__(92)) + ") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:MyriadPro;src:url(" + escape(__webpack_require__(94)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(96)) + ") format(\"woff\"),url(" + escape(__webpack_require__(95)) + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:SourceSansPro;src:url(" + escape(__webpack_require__(19)) + ");src:local(\"\\263A\"),url(" + escape(__webpack_require__(21)) + ") format(\"woff\"),url(" + escape(__webpack_require__(20)) + ") format(\"truetype\");font-weight:400;font-style:normal}*{box-sizing:border-box}html{font-family:SourceSansPro,Arial,sans-serif;font-size:62.5%;color:#282828;background:#fff}body{padding:0;margin:0}.about__title{font-size:5rem;text-align:center;padding:0;margin:20px 0}.about__video-container{height:336px;width:594px;margin:20px auto 25px}.about__text{background:#282828;color:#fff;padding:25px 5%;margin:0;font-size:1.6rem}@media screen and (max-width:700px){.about__text{font-size:1.4rem}}.about__text_location{background:none;color:inherit}.about__text_nopadding-left{padding:25px 0}.about__parallax{height:350px;background-attachment:fixed;background-position:50%;background-repeat:no-repeat;background-size:cover}.about__parallax_first{background-image:url(" + escape(__webpack_require__(296)) + ")}.about__parallax_second{background-image:url(" + escape(__webpack_require__(297)) + ")}.about__location-wrapper{border-top:2px solid #282828;padding:25px}.map-flex__container{display:flex;justify-content:space-between}@media screen and (max-width:700px){.map-flex__container{flex-direction:column}}.about__map-container{width:100%}.about__map-admin{padding-left:25px}", ""]);

// exports


/***/ }),
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/parallax1.png";

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/parallax2.png";

/***/ }),
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_header_header_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicons_favicons__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicons_favicons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__favicons_favicons__);



var html = __webpack_require__(230);
const css = __webpack_require__(235);

/***/ })
/******/ ]);