/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./data/data.js":
/*!**********************!*\
  !*** ./data/data.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar data = [{\n  \"nameAlbum\": \"Rust in peace\",\n  \"band\": \"Megadeth\",\n  \"year\": \"1990\",\n  \"linkSong\": \"5LyRtsQLhcXmy50VXhQXXS?si=5b510ad51b214732\"\n}, {\n  \"nameAlbum\": \"Frolic Through the Park\",\n  \"band\": \"Death Angel\",\n  \"year\": \"1988\",\n  \"linkSong\": \"21whloemotjEi7Uy7wV51E?si=e1cb03253d7544aa\"\n}, {\n  \"nameAlbum\": \"Twilight of the Thunder God\",\n  \"band\": \"Amon Amarth\",\n  \"year\": \"2008\",\n  \"linkSong\": \"1wE9SZ9tLHyVIkGwDGpvv5?si=f3d3adb02a9e4bd8\"\n}, {\n  \"nameAlbum\": \"Show No Mercy\",\n  \"band\": \"Slayer\",\n  \"year\": \"1983\",\n  \"linkSong\": \"12GarzM4HiVj6qtWCC8GyN?si=7165434f26174bbd\"\n}, {\n  \"nameAlbum\": \"Spreading the Disease\",\n  \"band\": \"Anthrax\",\n  \"year\": \"1985\",\n  \"linkSong\": \"7qYHH6ygW9GeNY7SVWf9ok?si=e2766161a3154403?si=7165434f26174bbd\"\n}, {\n  \"nameAlbum\": \"Agent Orange\",\n  \"band\": \"Sodom\",\n  \"year\": \"1989\",\n  \"linkSong\": \"3hiGEwP8qpEakkOsU9jI9V?si=b399954967f840dd\"\n}, {\n  \"nameAlbum\": \"Shattered Existence\",\n  \"band\": \"Xentrix\",\n  \"year\": \"1989\",\n  \"linkSong\": \"5ZixT30eaLnGUNWCDMYQqP?si=bb8b1553443845e3\"\n}, {\n  \"nameAlbum\": \"The Yellow And Black Attack\",\n  \"band\": \"Stryper\",\n  \"year\": \"1984\",\n  \"linkSong\": \"6Sb0YKOTeve1lElH6fgXLl?si=478ebd2e622c47b6\"\n}, {\n  \"nameAlbum\": \"Second Heat\",\n  \"band\": \"Racer X\",\n  \"year\": \"1987\",\n  \"linkSong\": \"1EFX3hDbAthtBmvolNZWry?si=4f871f5f5c6848d9\"\n}, {\n  \"nameAlbum\": \"Stalingrad: Brothers in Death\",\n  \"band\": \"Accept\",\n  \"year\": \"2012\",\n  \"linkSong\": \"1qrK1VcQ3xdK8aOyZcT2my?si=8e7c437d44ae4c31\"\n}, {\n  \"nameAlbum\": \"Victims of Deception\",\n  \"band\": \"Heathen\",\n  \"year\": \"1991\",\n  \"linkSong\": \"0dGxUm0SZYqc1ojUyTFjgA?si=53508d758d0c4f16\"\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://practica/./data/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/form.js */ \"./src/utils/form.js\");\n/* harmony import */ var _utils_fetchData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/fetchData.js */ \"./src/utils/fetchData.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n\n\n\nvar home = document.getElementById('home');\nvar fragment = document.createDocumentFragment();\nvar templateHome = document.getElementById('template-home').content;\nvar templateaboutUs = document.getElementById('template-aboutUs').content;\nvar templateContactUs = document.getElementById('template-contactUs').content;\n\nvar renderPage = function renderPage(template) {\n  home.textContent = '';\n  var cloneHome = template.cloneNode(true);\n  fragment.appendChild(cloneHome);\n  home.appendChild(fragment);\n};\n\nvar navigation = function navigation(e, idPage, page) {\n  if (e.target.id === idPage) {\n    page();\n  }\n};\n\nvar homePage = function homePage() {\n  renderPage(templateHome);\n  (0,_utils_fetchData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\nhomePage();\n\nvar aboutUsPage = function aboutUsPage() {\n  renderPage(templateaboutUs);\n};\n\nvar contactUsPage = function contactUsPage() {\n  renderPage(templateContactUs);\n  (0,_utils_form_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\ndocument.addEventListener('click', function (e) {\n  navigation(e, 'homePage', homePage);\n  navigation(e, 'aboutUs', aboutUsPage);\n  navigation(e, 'contactUs', contactUsPage);\n\n  if (e.target.id === 'instagram') {\n    document.querySelector('.meme').classList.remove('hidden');\n  } else {\n    if (!(e.target.id === 'imgMeme')) document.querySelector('.meme').classList.add('hidden');\n  }\n});\n\n//# sourceURL=webpack://practica/./src/index.js?");

/***/ }),

/***/ "./src/utils/fetchData.js":
/*!********************************!*\
  !*** ./src/utils/fetchData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data.js */ \"./data/data.js\");\n\nvar fragment = document.createDocumentFragment();\n\nvar fetchData = function fetchData() {\n  var template = document.getElementById('template').content;\n  var result = document.querySelector('.top-ten');\n  _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(function (item) {\n    var clone = template.cloneNode(true);\n    clone.querySelectorAll('.nameAlbum').forEach(function (itemName) {\n      return itemName.textContent = item.nameAlbum;\n    });\n    clone.querySelector('#artist').textContent = item.band;\n    clone.querySelector('#yearAlbum').textContent = item.year;\n    clone.querySelector('#linkSong').setAttribute('src', \"https://open.spotify.com/embed?uri=spotify:track:\".concat(item.linkSong));\n    fragment.appendChild(clone);\n  });\n  result.appendChild(fragment);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n//# sourceURL=webpack://practica/./src/utils/fetchData.js?");

/***/ }),

/***/ "./src/utils/form.js":
/*!***************************!*\
  !*** ./src/utils/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var $btnMailTo = document.getElementById('sendAnEmail');\n  var form = new FormData(this);\n\n  if (!form.get('name').trim() || !form.get('email') || !form.get('comment').trim()) {\n    alert('No puedes dejar campos en blanco');\n  } else {\n    $btnMailTo.setAttribute('href', \"mailto:raffriff097@gmail.com?subject=\".concat(form.get('name'), \" - \").concat(form.get('email'), \"&body=\").concat(form.get('comment'), \"&\"));\n    $btnMailTo.click();\n    this.reset();\n  }\n}\n\n;\n\nvar getForm = function getForm() {\n  var $form = document.getElementById('form');\n  $form.addEventListener('submit', handleSubmit);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getForm);\n\n//# sourceURL=webpack://practica/./src/utils/form.js?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://practica/./styles/main.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;