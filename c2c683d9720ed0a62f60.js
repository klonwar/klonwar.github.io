/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/app/app.tsx":
/*!********************************!*\
  !*** ./components/app/app.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #components/main/main */ "./components/main/main.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_my_redirect_my_redirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! #components/my-redirect/my-redirect */ "./components/my-redirect/my-redirect.tsx");
/* harmony import */ var _src_hooks_use_url_replacer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! #src/hooks/use-url-replacer */ "./hooks/use-url-replacer.ts");






var App = function App() {
  Object(_src_hooks_use_url_replacer__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/:link",
    component: _components_my_redirect_my_redirect__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_main_main__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/main/main.tsx":
/*!**********************************!*\
  !*** ./components/main/main.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_resume_resume__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #components/resume/resume */ "./components/resume/resume.tsx");



var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_resume_resume__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/my-redirect/my-redirect.tsx":
/*!************************************************!*\
  !*** ./components/my-redirect/my-redirect.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");



var MyRedirect = function MyRedirect() {
  var l = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  var pathname = (l.pathname + l.search + l.hash).substring(1);

  try {
    new URL(pathname);
  } catch (e) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "uk-position-center"
    }, "URL is invalid");
  }

  if (pathname) {
    location.assign(pathname);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-position-center",
    "uk-spinner": "ratio: 5"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyRedirect);

/***/ }),

/***/ "./components/resume/resume.tsx":
/*!**************************************!*\
  !*** ./components/resume/resume.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_images_profile_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #src/images/profile.jpg */ "./images/profile.jpg");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "../node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _src_config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! #src/config.json */ "./config.json");
var _src_config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! #src/config.json */ "./config.json", 1);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







var Resume = function Resume() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-height-1-1 resume",
    "uk-grid": ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-width-1-3@s uk-flex uk-flex-column resume-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-padding-small uk-flex uk-flex-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-width-1-2 resume-photo-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "resume-photo",
    src: "./".concat(_src_images_profile_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]),
    alt: "\u042D\u0442\u043E \u044F",
    "uk-img": ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "uk-padding-small uk-padding-remove-vertical resume-title uk-text-bold"
  }, _src_config_json__WEBPACK_IMPORTED_MODULE_4__.contacts.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-padding-small"
  }, function () {
    var contactsWithIcons = [["vk", _src_config_json__WEBPACK_IMPORTED_MODULE_4__.contacts.info.vk, "@klonwar", _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faVk"]], ["telegram", _src_config_json__WEBPACK_IMPORTED_MODULE_4__.contacts.info.telegram, "@klonwar", _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTelegram"]], ["github", _src_config_json__WEBPACK_IMPORTED_MODULE_4__.contacts.info.github, "klonwar", _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"]], ["stackoverflow", _src_config_json__WEBPACK_IMPORTED_MODULE_4__.contacts.info.stackoverflow, "mr-klonwar", _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faStackOverflow"]], ["mail", _src_config_json__WEBPACK_IMPORTED_MODULE_4__.contacts.info.mail, _src_config_json__WEBPACK_IMPORTED_MODULE_4__.contacts.info.mail, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"]]];
    return contactsWithIcons.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        key: item[0],
        className: "uk-link-text uk-flex uk-flex-middle uk-text-truncate",
        href: item[0] === "mail" ? "mailto:".concat(item[1]) : item[1]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "resume-contacts__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        className: "uk-text-large",
        icon: item[item.length - 1]
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "uk-margin-small-left uk-text-small"
      }, item[2]));
    });
  }()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "uk-padding-small uk-padding-remove-vertical resume-title uk-text-bold"
  }, _src_config_json__WEBPACK_IMPORTED_MODULE_4__.languages.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-padding-small"
  }, _src_config_json__WEBPACK_IMPORTED_MODULE_4__.languages.info.map(function (info, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "".concat(info.name, "_").concat(index),
      "uk-grid": ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "uk-width-1-2 uk-text-truncate"
    }, info.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "uk-width-1-2 uk-flex uk-flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("progress", {
      className: "uk-progress resume-progress uk-margin-small-bottom",
      value: info.level,
      max: info.max
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "uk-text-small uk-text-truncate uk-text-right"
    }, info.note)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "uk-padding-small uk-padding-remove-vertical resume-title uk-text-bold"
  }, _src_config_json__WEBPACK_IMPORTED_MODULE_4__.skills.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-padding-small uk-text-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "uk-padding-small uk-padding-remove-vertical uk-padding-remove-right"
  }, _src_config_json__WEBPACK_IMPORTED_MODULE_4__.skills.info.map(function (info, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: "".concat(info.name, "_").concat(index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "uk-flex uk-flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, info.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "uk-flex uk-flex-column uk-margin-small-top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("progress", {
      className: "uk-progress resume-progress uk-margin-small-bottom",
      value: info.level,
      max: info.max
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "uk-text-small uk-text-truncate uk-text-right"
    }, info.note))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-width-2-3@s uk-padding uk-padding-remove-bottom resume-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447 \u0410\u0440\u0430\u043F\u043E\u0432"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "uk-margin-remove"
  }, "\u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A, Junior"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMapMarkerAlt"]
  }), " ", "\u0412\u043E\u0440\u043E\u043D\u0435\u0436"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserClock"]
  }), " ", "19 \u043B\u0435\u0442"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSearch"]
  }), " ", "\u0418\u0449\u0443 \u0440\u0430\u0431\u043E\u0442\u0443 \u043D\u0430 \u043F\u043E\u043B\u0441\u0442\u0430\u0432\u043A\u0438"))), function () {
    var infoBlocksWithIcons = [[_src_config_json__WEBPACK_IMPORTED_MODULE_4__.infoBlocks[0], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSuitcase"]], [_src_config_json__WEBPACK_IMPORTED_MODULE_4__.infoBlocks[1], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faGraduationCap"]], [_src_config_json__WEBPACK_IMPORTED_MODULE_4__.infoBlocks[2], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileAlt"]]];
    return infoBlocksWithIcons.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: item[0].title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "uk-flex resume-edge"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "resume-title uk-text-bold"
      }, item[0].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "uk-width-expand resume-edge__line"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "resume-edge__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: item[1]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item[0].blocks.map(function (infoBlockItem, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "resume-info-block uk-grid-small",
          key: "".concat(infoBlockItem.name, "-").concat(index),
          "uk-grid": ""
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "uk-width-1-5"
        }, infoBlockItem.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "uk-width-4-5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "resume-info-block__title uk-text-bold"
        }, infoBlockItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, infoBlockItem.subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: infoBlockItem.link
        }, infoBlockItem.link), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, infoBlockItem.description)));
      })));
    });
  }(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uk-flex resume-edge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "resume-title uk-text-bold"
  }, "\u041E \u0441\u0435\u0431\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uk-width-expand resume-edge__line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "resume-edge__icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "resume-info-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _src_config_json__WEBPACK_IMPORTED_MODULE_4__.aboutMe)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: contacts, languages, skills, infoBlocks, aboutMe, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contacts\":{\"title\":\"Контакты\",\"info\":{\"vk\":\"https://vk.com/klonwar\",\"telegram\":\"https://t.me/klonwar\",\"github\":\"https://github.com/klonwar\",\"mail\":\"dima.arapov@gmail.com\",\"stackoverflow\":\"https://ru.stackoverflow.com/users/182390/mr-klonwar\"}},\"languages\":{\"title\":\"Языки\",\"info\":[{\"name\":\"Английский\",\"level\":3,\"max\":6,\"note\":\"B1 - Средний\"}]},\"skills\":{\"title\":\"Навыки\",\"info\":[{\"name\":\"HTML, CSS, LESS, SASS, Адаптивная верстка\",\"level\":3,\"max\":5,\"note\":\"Средний\"},{\"name\":\"JS, TS, React + Redux\",\"level\":4,\"max\":5,\"note\":\"Опытный\"},{\"name\":\"Node.JS, Express, Puppeteer\",\"level\":3,\"max\":5,\"note\":\"Средний\"},{\"name\":\"Webpack, Babel, Jest, ESLint\",\"level\":2,\"max\":5,\"note\":\"Базовый\"},{\"name\":\"Linux, SQL, Git\",\"level\":2,\"max\":5,\"note\":\"Базовый\"}]},\"infoBlocks\":[{\"title\":\"Проекты\",\"blocks\":[{\"name\":\"MathGym\",\"time\":\"2017 - 2019\",\"link\":\"https://mathgym.ru/\",\"description\":\"Сервис для школьников, помогающий оттачивать математические навыки. Делал, когда сам был школьником. PHP, Yii2, JS и JQuery. Разработал мобильное приложение под андроид на Java\"},{\"name\":\"Мониторы сайтов\",\"time\":\"2019 - 2020\",\"description\":\"Парсеры на NodeJS, которые оповещают в Discord или Telegram о появлении новых товаров и изменении их цены\"},{\"name\":\"Get To Post\",\"time\":\"c 2020\",\"link\":\"https://get2p.herokuapp.com/\",\"description\":\"Это инструмент, который позволяет протестировать API. Используются JS, TS, React и Redux\"}]},{\"title\":\"Образование\",\"blocks\":[{\"name\":\"Воронежский Государственный Университет\",\"time\":\"2023\",\"subtitle\":\"Неполное высшее\",\"description\":\"ФКН, Программная Инженерия, 2 курс\"}]},{\"title\":\"Курсы\",\"blocks\":[{\"name\":\"DSR\",\"time\":\"2020\",\"description\":\"JS Bootcamp 2020: Deep Dive Into React\"},{\"name\":\"DataArt\",\"time\":\"2021\",\"description\":\"DataArt JavaScript Academy 2021\"}]}],\"aboutMe\":\"Опыта коммерческой разработки нет ввиду учебы. Умею самостоятельно обучаться. Периодически участвую в CTF (соревнованиях по компьютерной безопасности) в составе команды ONO\"}");

/***/ }),

/***/ "./css/style.less":
/*!************************!*\
  !*** ./css/style.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./hooks/use-url-replacer.ts":
/*!***********************************!*\
  !*** ./hooks/use-url-replacer.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var useUrlReplacer = function useUrlReplacer() {
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useLocation"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (location.search) {
      var query = {};
      location.search.slice(1).split('&').forEach(function (v) {
        var a = v.split('=');
        query[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
      });

      if (query.p !== undefined) {
        var newState = location.pathname.slice(0, -1) + (query.p || '') + (query.q ? '?' + query.q : '') + location.hash;
        history.replace(newState);
      }
    }
  }, []);
};

/* harmony default export */ __webpack_exports__["default"] = (useUrlReplacer);

/***/ }),

/***/ "./images/profile.jpg":
/*!****************************!*\
  !*** ./images/profile.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "adc8f635b3f26f6268b76cba03e05199.jpg");

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_app_app_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! #components/app/app.tsx */ "./components/app/app.tsx");
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uikit */ "../node_modules/uikit/dist/js/uikit.js");
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uikit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uikit/dist/js/uikit-icons */ "../node_modules/uikit/dist/js/uikit-icons.js");
/* harmony import */ var uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _src_css_style_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! #src/css/style.less */ "./css/style.less");
/* harmony import */ var _src_css_style_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_css_style_less__WEBPACK_IMPORTED_MODULE_6__);








(function () {
  // @ts-ignore
  uikit__WEBPACK_IMPORTED_MODULE_3___default.a.use(uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_4___default.a);
  react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_app_app_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.querySelector("#root"));
})();

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! C:\Users\klonw\PhpstormProjects\klonwar.github.io\src\index.tsx */"./index.tsx");


/***/ })

/******/ });