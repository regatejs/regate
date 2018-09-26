(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Regate"] = factory();
	else
		root["Regate"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegateTextarea = exports.RegateImage = exports.RegateFile = exports.RegateText = undefined;

var _RegateText = __webpack_require__(1);

var _RegateText2 = _interopRequireDefault(_RegateText);

var _RegateFile = __webpack_require__(2);

var _RegateFile2 = _interopRequireDefault(_RegateFile);

var _RegateImage = __webpack_require__(4);

var _RegateImage2 = _interopRequireDefault(_RegateImage);

var _RegateTextarea = __webpack_require__(3);

var _RegateTextarea2 = _interopRequireDefault(_RegateTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RegateText = _RegateText2.default;
exports.RegateFile = _RegateFile2.default;
exports.RegateImage = _RegateImage2.default;
exports.RegateTextarea = _RegateTextarea2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RegateText = {};

RegateText.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? '' : _ref$placeholder,
      onInitialized = _ref.onInitialized,
      onChange = _ref.onChange;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  if (isRequired === true) _input.required = true;

  if (value !== undefined) _input.value = value;

  if (placeholder !== undefined) _input.placeholder = placeholder;

  if ((typeof onInitialized === 'undefined' ? 'undefined' : _typeof(onInitialized)) === (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
    var isValid = isRequired ? value.length > 0 : true;

    onInitialized({ value: value, isValid: isValid });
  }

  if ((typeof onChange === 'undefined' ? 'undefined' : _typeof(onChange)) === (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
    _input.oninput = function () {
      var value = _input.value;

      var isValid = isRequired ? value.length > 0 : true;

      onChange({ value: value, isValid: isValid });
    };
  }
};

RegateText.markup = function (id) {
  return '\n  <input\n    id=\'' + id + '__input\'\n    type=\'text\'\n    class=\'form-control\'\n  />\n';
};

exports.default = RegateText;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegateFile = {};

RegateFile.instances = {};

RegateFile.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      isRequired = _ref.isRequired,
      uploaderUrl = _ref.uploaderUrl,
      repositoryUrl = _ref.repositoryUrl;


  var instance = {
    id: id,
    name: name,
    value: value,
    isRequired: isRequired,
    uploaderUrl: uploaderUrl,
    repositoryUrl: repositoryUrl
  };
  RegateFile.instances[id] = instance;

  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');
  var _remove = document.getElementById(id + '__remove');
  var _view = document.getElementById(id + '__view');
  var _upload = document.getElementById(id + '__upload');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  if (isRequired === true) _input.required = true;

  if (value !== undefined) RegateFile.set(id, value);

  var popup = function popup(url, title, w, h) {
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = width / 2 - w / 2 + dualScreenLeft;
    var top = height / 2 - h / 2 + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus();
    }

    return false;
  };

  _upload.onclick = function () {
    popup(uploaderUrl + '?id=' + id, 'RegateFileUploader', 400, 600);
    return false;
  };

  _remove.onclick = function () {
    RegateFile.set(id, '');
  };
};

RegateFile.markup = function (id) {
  return '\n  <div data-role=\'RegateFile\'>\n      <div class=\'input-group\'>\n          <div class=\'input-group-prepend\'>\n              <button type=\'button\'\n                      class=\'btn btn-secondary\'\n                      id=\'' + id + '__upload\'>\n                  <i class=\'fa fa-search mr-1\'></i> CHOOSE\n              </button>\n          </div>\n\n          <input type=\'text\'\n                  style=\'pointer-events: none;\'\n                  onfocus=\'this.blur();\'\n                  id=\'' + id + '__input\'\n                  class=\'form-control\' />\n\n          <div class=\'input-group-append\'>\n              <button type=\'button\' class=\'btn btn-outline-secondary\' id=\'' + id + '__remove\' style=\'display: none;\'>\n                  <i class=\'fa fa-fw fa-times\'></i>\n              </button>\n              <a href=\'#\' target=\'_blank\' class=\'btn btn-outline-secondary\' id=\'' + id + '__view\' style=\'display: none;\'>\n                  <i class=\'fa fa-fw fa-download\'></i>\n              </a>\n          </div>\n      </div>\n  </div>\n';
};

RegateFile.set = function (id, value) {
  var _input = document.getElementById(id + '__input');
  var _remove = document.getElementById(id + '__remove');
  var _view = document.getElementById(id + '__view');
  var _upload = document.getElementById(id + '__upload');

  _input.value = value;
  _view.href = (RegateFile.instances[id].repositoryUrl || '') + value;

  if (value !== '') {
    _remove.style.display = 'flex';
    _view.style.display = 'flex';
    _upload.style.display = 'none';
  } else {
    _remove.style.display = 'none';
    _view.style.display = 'none';
    _upload.style.display = 'flex';
  }
};

exports.default = RegateFile;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RegateTextarea = {};

RegateTextarea.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? '' : _ref$placeholder,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? RegateTextarea.Size.Medium : _ref$size,
      onInitialized = _ref.onInitialized,
      onChange = _ref.onChange;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  if (isRequired === true) _input.required = true;

  if (value !== undefined) _input.value = value;

  if (placeholder !== undefined) _input.placeholder = placeholder;

  if ((typeof onInitialized === 'undefined' ? 'undefined' : _typeof(onInitialized)) === (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
    var isValid = isRequired ? value.length > 0 : true;

    onInitialized({ value: value, isValid: isValid });
  }

  if ((typeof onChange === 'undefined' ? 'undefined' : _typeof(onChange)) === (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
    _input.oninput = function () {
      var value = _input.value;

      var isValid = isRequired ? value.length > 0 : true;

      onChange({ value: value, isValid: isValid });
    };
  }

  _input.style.height = size + 'px';
};

RegateTextarea.markup = function (id) {
  return '\n  <textarea\n    id=\'' + id + '__input\'\n    class=\'form-control\'\n    style=\'resize: none;\'\n  ></textarea>\n';
};

RegateTextarea.Size = {
  'Small': 150,
  'Medium': 200,
  'Large': 300
};

exports.default = RegateTextarea;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegateImage = {};

RegateImage.instances = {};

RegateImage.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      isRequired = _ref.isRequired,
      uploaderUrl = _ref.uploaderUrl,
      repositoryUrl = _ref.repositoryUrl;


  var instance = {
    id: id,
    name: name,
    value: value,
    isRequired: isRequired,
    uploaderUrl: uploaderUrl,
    repositoryUrl: repositoryUrl
  };
  RegateImage.instances[id] = instance;

  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');
  var _remove = document.getElementById(id + '__remove');
  var _view = document.getElementById(id + '__view');
  var _upload = document.getElementById(id + '__upload');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  if (isRequired === true) _input.required = true;

  if (value !== undefined) RegateImage.set(id, value);

  var popup = function popup(url, title, w, h) {
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = width / 2 - w / 2 + dualScreenLeft;
    var top = height / 2 - h / 2 + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus();
    }

    return false;
  };

  _upload.onclick = function () {
    popup(uploaderUrl + '?id=' + id, 'RegateImageUploader', 400, 600);
    return false;
  };

  _remove.onclick = function () {
    RegateImage.set(id, '');
  };
};

RegateImage.markup = function (id) {
  return '\n  <div data-role=\'RegateImage\'>\n      <div class=\'input-group\'>\n          <div class=\'input-group-prepend\'>\n              <button type=\'button\'\n                      class=\'btn btn-secondary\'\n                      id=\'' + id + '__upload\'>\n                  <i class=\'fa fa-search mr-1\'></i> CHOOSE\n              </button>\n          </div>\n\n          <input type=\'text\'\n                  style=\'pointer-events: none;\'\n                  onfocus=\'this.blur();\'\n                  id=\'' + id + '__input\'\n                  class=\'form-control\' />\n\n          <div class=\'input-group-append\'>\n              <button type=\'button\' class=\'btn btn-outline-secondary\' id=\'' + id + '__remove\' style=\'display: none;\'>\n                  <i class=\'fa fa-fw fa-times\'></i>\n              </button>\n              <a href=\'#\' target=\'_blank\' class=\'btn btn-outline-secondary\' id=\'' + id + '__view\' style=\'display: none;\'>\n                  <i class=\'fa fa-fw fa-download\'></i>\n              </a>\n          </div>\n      </div>\n  </div>\n';
};

RegateImage.set = function (id, value) {
  var _input = document.getElementById(id + '__input');
  var _remove = document.getElementById(id + '__remove');
  var _view = document.getElementById(id + '__view');
  var _upload = document.getElementById(id + '__upload');

  _input.value = value;
  _view.href = (RegateImage.instances[id].repositoryUrl || '') + value;

  if (value !== '') {
    _remove.style.display = 'flex';
    _view.style.display = 'flex';
    _upload.style.display = 'none';
  } else {
    _remove.style.display = 'none';
    _view.style.display = 'none';
    _upload.style.display = 'flex';
  }
};

exports.default = RegateImage;

/***/ })
/******/ ]);
});