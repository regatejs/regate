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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _nunjucks = __webpack_require__(2);

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _fs = __webpack_require__(3);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(4);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mkFullDir(dir) {
  var fullPath = _path2.default.normalize(dir);
  var dirName = _path2.default.dirname(fullPath);
  fullPath.split(_path2.default.sep).reduce(function (acc, elem) {
    var currDir = _path2.default.join(acc, elem + _path2.default.sep);
    if (!_fs2.default.existsSync(currDir)) _fs2.default.mkdirSync(currDir);
    return currDir;
  }, '');
}

function writeToPath(targetPath, data) {
  var dirName = _path2.default.dirname(targetPath);
  var fileName = _path2.default.basename(targetPath);
  mkFullDir(dirName);
  _fs2.default.writeFileSync(targetPath, data);
}

var app = (0, _express2.default)();
var port = 3003;
var siteUrl = '/';
var themeUrl = '/';
var timestamp = Math.floor(Date.now() / 1000);

_nunjucks2.default.configure('views', {
  autoescape: true,
  express: app
});

app.use(siteUrl, _express2.default.static('docs/dashmix'));

app.set('view engine', 'nunjucks');

app.get('/', function (req, res) {
  res.render('homepage', { siteUrl: siteUrl, themeUrl: themeUrl, timestamp: timestamp });
});

app.get('/documentation/:doc', function (req, res) {
  var doc = req.params.doc;

  res.render('documentation/' + doc + '/index', { siteUrl: siteUrl, themeUrl: themeUrl, timestamp: timestamp });
});

app.get('/uploader/file', function (req, res) {
  res.render('uploader/file', { siteUrl: siteUrl, themeUrl: themeUrl, timestamp: timestamp });
});

app.get('/uploader/image', function (req, res) {
  res.render('uploader/image', { siteUrl: siteUrl, themeUrl: themeUrl, timestamp: timestamp });
});

app.get('/components/:component', function (req, res) {
  var component = req.params.component;

  res.render('components/' + component + '/index', { siteUrl: siteUrl, themeUrl: themeUrl, timestamp: timestamp });
});

app.listen(port, function () {
  return console.log('Regate app listening on http://localhost:' + port + '/');
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nunjucks");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);