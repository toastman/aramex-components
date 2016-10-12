/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _header = __webpack_require__(1);

	var _header2 = _interopRequireDefault(_header);

	var _oidcProvider = __webpack_require__(8);

	var _oidcProvider2 = _interopRequireDefault(_oidcProvider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ngModule = angular.module('aramex', []);

	// config(ngModule)

	// import config from './config.js'
	(0, _header2.default)(ngModule);
	(0, _oidcProvider2.default)(ngModule);

	exports.default = ngModule.name;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(2);

	var _header = __webpack_require__(6);

	var _header2 = _interopRequireDefault(_header);

	var _headerController = __webpack_require__(9);

	var _headerController2 = _interopRequireDefault(_headerController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var aramexHeader = {
	    template: _header2.default,
	    controller: _headerController2.default
	};

	exports.default = function (ngModule) {
	    return ngModule.component('aramexHeader', aramexHeader);
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./header.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./header.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".ar-header {\n  background-color: #EF2C21;\n  font-family: Verdana, Arial, sans-serif;\n  font-size: 11px; }\n\n.ar-header-logo {\n  display: inline-block; }\n\n.ar-header-info {\n  color: white;\n  float: right;\n  padding: 10px 10px 0 0;\n  font-size: smaller;\n  color: #F3F3F3;\n  text-align: right; }\n  .ar-header-info a {\n    color: #F3F3F3; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<header class=\"ar-header\">\n    <a href=\"/\" class=\"ar-header-logo\">\n        <img src=\"" + __webpack_require__(7) + "\" alt=\"\">\n    </a>\n    <span class=\"ar-header-info\" ng-if=\"$ctrl.isUserInfoAvailable\">\n        User: {{$ctrl.userName}}, from: {{$ctrl.from}} <br>\n        Access Time: {{$ctrl.accessTime}}, Last Logon: {{$ctrl.lastLogon}} <br>\n        Access level: {{$ctrl.accessLevel}}, Access code: {{$ctrl.accessCode}} <br>\n        <a href=\"javascript:void(0)\">Change User</a>\n    </span>\n</header>";

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/gif;base64,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"

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var OidcProvider = function () {
	    /* @ngInject */
	    function OidcProvider() {
	        var _this = this;

	        _classCallCheck(this, OidcProvider);

	        angular.merge(this, {
	            setup: this.setup.bind(this),
	            getUser: this.getUser.bind(this),
	            $get: this.$get.bind(this),
	            init: this.init.bind(this)
	        });

	        this.userData = new Promise(function (res, rej) {
	            _this.userDataPromiseResolve = res;
	            _this.userDataPromiseReject = rej;
	        });
	    }

	    _createClass(OidcProvider, [{
	        key: 'setup',
	        value: function setup(options) {
	            this.Oidc = new Oidc.UserManager(options);
	            this.init();
	        }
	    }, {
	        key: 'init',
	        value: function init() {
	            var _this2 = this;

	            this.Oidc.getUser().then(function (u) {
	                if (!u) {
	                    return _this2.Oidc.querySessionStatus().then(function () {
	                        return _this2.Oidc.signinSilent().then(_this2.init);
	                    }, function () {
	                        return _this2.Oidc.signinPopup().then(_this2.init);
	                    });
	                } else {
	                    _this2.userDataPromiseResolve(u);
	                }
	            });
	        }
	    }, {
	        key: 'getUser',
	        value: function getUser() {
	            return this.userData;
	        }
	    }, {
	        key: '$get',
	        value: function $get() {
	            return this;
	        }
	    }]);

	    return OidcProvider;
	}();

	exports.default = function (ngModule) {
	    return ngModule.provider('aramexOidc', OidcProvider);
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HeaderController =
	/* @ngInject */
	["aramexOidc", "$filter", function HeaderController(aramexOidc, $filter) {
	    var _this = this;

	    _classCallCheck(this, HeaderController);

	    aramexOidc.getUser().then(function (data) {
	        _this.userName = data.profile.name;
	        _this.from = data.profile.company_name + ' - ' + data.profile.company_code;
	        _this.accessTime = $filter('date')(data.profile.auth_time * 1000, 'h:mm');
	        _this.lastLogon = $filter('date')(data.profile.auth_time * 1000, 'M/d/yy h:mm');
	        _this.accessLevel = 2;
	        _this.accessCode = data.profile.company_code;
	        _this.isUserInfoAvailable = true;
	    });
	}];

	exports.default = HeaderController;

/***/ }
/******/ ]);