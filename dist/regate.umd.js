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
exports.RegateNumber = exports.RegateDropdown = exports.RegateCkeditor = exports.RegateContentEditable = exports.RegateTextarea = exports.RegateImage = exports.RegateFile = exports.RegateText = undefined;

var _RegateText = __webpack_require__(1);

var _RegateText2 = _interopRequireDefault(_RegateText);

var _RegateFile = __webpack_require__(2);

var _RegateFile2 = _interopRequireDefault(_RegateFile);

var _RegateImage = __webpack_require__(3);

var _RegateImage2 = _interopRequireDefault(_RegateImage);

var _RegateTextarea = __webpack_require__(4);

var _RegateTextarea2 = _interopRequireDefault(_RegateTextarea);

var _RegateContentEditable = __webpack_require__(5);

var _RegateContentEditable2 = _interopRequireDefault(_RegateContentEditable);

var _RegateCkeditor = __webpack_require__(6);

var _RegateCkeditor2 = _interopRequireDefault(_RegateCkeditor);

var _RegateDropdown = __webpack_require__(7);

var _RegateDropdown2 = _interopRequireDefault(_RegateDropdown);

var _RegateNumber = __webpack_require__(8);

var _RegateNumber2 = _interopRequireDefault(_RegateNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RegateText = _RegateText2.default;
exports.RegateFile = _RegateFile2.default;
exports.RegateImage = _RegateImage2.default;
exports.RegateTextarea = _RegateTextarea2.default;
exports.RegateContentEditable = _RegateContentEditable2.default;
exports.RegateCkeditor = _RegateCkeditor2.default;
exports.RegateDropdown = _RegateDropdown2.default;
exports.RegateNumber = _RegateNumber2.default;

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
    _remove.style.display = '';
    _view.style.display = '';
    _upload.style.display = 'none';
  } else {
    _remove.style.display = 'none';
    _view.style.display = 'none';
    _upload.style.display = '';
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
var RegateImage = {};

RegateImage.instances = {};

RegateImage.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
      _ref$uploaderUrl = _ref.uploaderUrl,
      uploaderUrl = _ref$uploaderUrl === undefined ? '/' : _ref$uploaderUrl,
      _ref$repositoryUrl = _ref.repositoryUrl,
      repositoryUrl = _ref$repositoryUrl === undefined ? '/' : _ref$repositoryUrl;


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
  return '\n  <div data-role=\'RegateImage\'>\n      <div class=\'input-group\'>\n          <div class=\'input-group-prepend\'>\n              <button type=\'button\'\n                      class=\'btn btn-secondary\'\n                      id=\'' + id + '__upload\'>\n                  <i class=\'fa fa-search mr-1\'></i> CHOOSE\n              </button>\n          </div>\n\n          <input type=\'text\'\n                  style=\'pointer-events: none;\'\n                  onfocus=\'this.blur();\'\n                  id=\'' + id + '__input\'\n                  class=\'form-control\' />\n\n          <div class=\'input-group-append\'>\n              <button type=\'button\' class=\'btn btn-outline-secondary\' id=\'' + id + '__remove\' style=\'display: none;\'>\n                  <i class=\'fa fa-fw fa-times\'></i>\n              </button>\n              <a href=\'#\' target=\'_blank\' class=\'btn btn-outline-secondary\' id=\'' + id + '__view\' style=\'display: none;\'>\n                  <i class=\'fa fa-fw fa-download\'></i>\n              </a>\n          </div>\n      </div>\n      \n      <img id=\'' + id + '__image\'\n        style=\'display: none; max-width: 200px; max-height: 150px;\'\n      />\n  </div>\n';
};

RegateImage.set = function (id, value) {
  var _input = document.getElementById(id + '__input');
  var _remove = document.getElementById(id + '__remove');
  var _view = document.getElementById(id + '__view');
  var _upload = document.getElementById(id + '__upload');
  var _image = document.getElementById(id + '__image');

  _input.value = value;

  if (value !== '') {
    _remove.style.display = '';
    _view.style.display = '';
    _upload.style.display = 'none';
    _image.style.display = 'block';

    _view.href = (RegateImage.instances[id].repositoryUrl || '') + value;
    _image.src = (RegateImage.instances[id].repositoryUrl || '') + value;
  } else {
    _remove.style.display = 'none';
    _view.style.display = 'none';
    _upload.style.display = '';
    _image.style.display = 'none';

    _view.href = '';
    _image.src = '';
  }
};

exports.default = RegateImage;

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegateContentEditable = {};

RegateContentEditable.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');
  var _div = document.getElementById(id + '__div');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  if (value !== undefined) {
    _input.value = value;
    _div.innerHTML = value;
  }

  _div.oninput = function () {
    var html = _div.innerHTML;
    _input.value = html;
  };
};

RegateContentEditable.markup = function (id) {
  return '\n  <div>\n    <textarea\n      id=\'' + id + '__input\'\n      class=\'form-control\'\n      style=\'display: none;\'\n    ></textarea>\n    <div\n      class=\'form-control\'\n      style=\'height: auto !important\'\n      id=\'' + id + '__div\'\n      contenteditable=\'true\'\n    ></div>\n  </div>\n';
};
exports.default = RegateContentEditable;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RegateCkeditor = {};

RegateCkeditor.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  // this component depends on Ckeditor 5
  if ((typeof ClassicEditor === 'undefined' ? 'undefined' : _typeof(ClassicEditor)) === ( true ? 'undefined' : _typeof(undefined))) {
    console.log('please include Ckeditor 5 before using RegateCkeditor');
    return false;
  }

  if (value !== undefined) _input.value = value;

  ClassicEditor.create(_input);
};

RegateCkeditor.markup = function (id) {
  return '\n  <textarea\n    id=\'' + id + '__input\'\n    class=\'form-control\'\n  ></textarea>\n';
};
exports.default = RegateCkeditor;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RegateDropdown = {};

RegateDropdown.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
      _ref$isSelect = _ref.isSelect2,
      isSelect2 = _ref$isSelect === undefined ? false : _ref$isSelect,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? [] : _ref$options;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  var _option = document.createElement('option');
  _option.value = '';
  _option.text = '';
  _option.hidden = true;
  _input.appendChild(_option);

  options.forEach(function (option) {
    var _option = document.createElement('option');
    _option.value = option.key;
    _option.text = option.value;

    _input.appendChild(_option);
  });

  _input.value = value;

  if (isRequired === true) _input.required = true;

  if (isSelect2 === true) {
    if ((typeof jQuery === 'undefined' ? 'undefined' : _typeof(jQuery)) === ( true ? 'undefined' : _typeof(undefined))) throw new Error('select2 need jQuery');

    if (_typeof(jQuery.fn.select2) === ( true ? 'undefined' : _typeof(undefined))) throw new Error('select2 is not loaded in the page');

    $(_input).select2();
  }
};

RegateDropdown.markup = function (id) {
  return '\n  <select\n    id=\'' + id + '__input\'\n    class=\'form-control\'\n  ></select>\n';
};
exports.default = RegateDropdown;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegateNumber = {};

RegateNumber.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  if (isRequired === true) _input.required = true;

  if (value !== undefined) _input.value = value;

  if (min !== undefined) _input.min = min;

  if (max !== undefined) _input.max = max;

  if (step !== undefined) _input.step = step;
};

RegateNumber.markup = function (id) {
  return '\n  <input\n    id=\'' + id + '__input\'\n    type=\'number\'\n    class=\'form-control\'\n  />\n';
};

exports.default = RegateNumber;

/***/ })
/******/ ]);
});