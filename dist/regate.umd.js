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
exports.InteractiveBoolean = exports.RegatePrice = exports.RegateTimePicker = exports.RegateTextMulti = exports.RegateForeignKey = exports.RegateSwitch = exports.RegatePersianDateTimePicker = exports.RegateKeyword = exports.RegateNumber = exports.RegateDropdown = exports.RegateCkeditor = exports.RegateContentEditable = exports.RegateTextarea = exports.RegateImage = exports.RegateFile = exports.RegateText = undefined;

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

var _RegateKeyword = __webpack_require__(9);

var _RegateKeyword2 = _interopRequireDefault(_RegateKeyword);

var _RegatePersianDateTimePicker = __webpack_require__(10);

var _RegatePersianDateTimePicker2 = _interopRequireDefault(_RegatePersianDateTimePicker);

var _RegateSwitch = __webpack_require__(11);

var _RegateSwitch2 = _interopRequireDefault(_RegateSwitch);

var _RegateForeignKey = __webpack_require__(12);

var _RegateForeignKey2 = _interopRequireDefault(_RegateForeignKey);

var _RegateTextMulti = __webpack_require__(13);

var _RegateTextMulti2 = _interopRequireDefault(_RegateTextMulti);

var _RegateTimePicker = __webpack_require__(14);

var _RegateTimePicker2 = _interopRequireDefault(_RegateTimePicker);

var _RegatePrice = __webpack_require__(16);

var _RegatePrice2 = _interopRequireDefault(_RegatePrice);

var _InteractiveBoolean = __webpack_require__(15);

var _InteractiveBoolean2 = _interopRequireDefault(_InteractiveBoolean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RegateText = _RegateText2.default;
exports.RegateFile = _RegateFile2.default;
exports.RegateImage = _RegateImage2.default;
exports.RegateTextarea = _RegateTextarea2.default;
exports.RegateContentEditable = _RegateContentEditable2.default;
exports.RegateCkeditor = _RegateCkeditor2.default;
exports.RegateDropdown = _RegateDropdown2.default;
exports.RegateNumber = _RegateNumber2.default;
exports.RegateKeyword = _RegateKeyword2.default;
exports.RegatePersianDateTimePicker = _RegatePersianDateTimePicker2.default;
exports.RegateSwitch = _RegateSwitch2.default;
exports.RegateForeignKey = _RegateForeignKey2.default;
exports.RegateTextMulti = _RegateTextMulti2.default;
exports.RegateTimePicker = _RegateTimePicker2.default;
exports.RegatePrice = _RegatePrice2.default;
exports.InteractiveBoolean = _InteractiveBoolean2.default;

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

RegateText.update = function (id, value) {
  var _input = document.getElementById(id + '__input');
  _input.value = value;
};

RegateText._markup = '\n  <input\n    id=\'{id}__input\'\n    type=\'text\'\n    class=\'form-control\'\n  />\n';

RegateText.markup = function (id) {
  return RegateText.getMarkup().replace(/{id}/g, id);
};

RegateText.setMarkup = function (markup) {
  return RegateText._markup = markup;
};

RegateText.getMarkup = function () {
  return RegateText._markup;
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

RegateFile._markup = '\n  <div class=\'input-group\'>\n      <div class=\'input-group-prepend\'>\n          <button type=\'button\'\n                  class=\'btn btn-secondary\'\n                  id=\'{id}__upload\'>\n              <i class=\'fa fa-search mr-1\'></i> CHOOSE\n          </button>\n      </div>\n\n      <input type=\'text\'\n              style=\'pointer-events: none;\'\n              onfocus=\'this.blur();\'\n              id=\'{id}__input\'\n              class=\'form-control\' />\n\n      <div class=\'input-group-append\'>\n          <button type=\'button\' class=\'btn btn-outline-secondary\' id=\'{id}__remove\' style=\'display: none;\'>\n              <i class=\'fa fa-fw fa-times\'></i>\n          </button>\n          <a href=\'#\' target=\'_blank\' class=\'btn btn-outline-secondary\' id=\'{id}__view\' style=\'display: none;\'>\n              <i class=\'fa fa-fw fa-download\'></i>\n          </a>\n      </div>\n  </div>\n';

RegateFile.markup = function (id) {
  return RegateFile.getMarkup().replace(/{id}/g, id);
};

RegateFile.setMarkup = function (markup) {
  return RegateFile._markup = markup;
};

RegateFile.getMarkup = function () {
  return RegateFile._markup;
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

RegateImage._markup = '\n  <div>\n      <div class=\'input-group\'>\n          <div class=\'input-group-prepend\'>\n              <button type=\'button\'\n                      class=\'btn btn-secondary\'\n                      id=\'{id}__upload\'>\n                  <i class=\'fa fa-search mr-1\'></i> CHOOSE\n              </button>\n          </div>\n\n          <input type=\'text\'\n                  style=\'pointer-events: none;\'\n                  onfocus=\'this.blur();\'\n                  id=\'{id}__input\'\n                  class=\'form-control\' />\n\n          <div class=\'input-group-append\'>\n              <button type=\'button\' class=\'btn btn-outline-secondary\' id=\'{id}__remove\' style=\'display: none;\'>\n                  <i class=\'fa fa-fw fa-times\'></i>\n              </button>\n              <a href=\'#\' target=\'_blank\' class=\'btn btn-outline-secondary\' id=\'{id}__view\' style=\'display: none;\'>\n                  <i class=\'fa fa-fw fa-download\'></i>\n              </a>\n          </div>\n      </div>\n      \n      <img id=\'{id}__image\'\n        style=\'display: none; max-width: 200px; max-height: 150px;\'\n      />\n  </div>\n';

RegateImage.markup = function (id) {
  return RegateImage.getMarkup().replace(/{id}/g, id);
};

RegateImage.setMarkup = function (markup) {
  return RegateImage._markup = markup;
};

RegateImage.getMarkup = function () {
  return RegateImage._markup;
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

RegateTextarea.Size = {
  'Small': 150,
  'Medium': 200,
  'Large': 300
};

RegateTextarea._markup = '\n  <textarea\n    id=\'{id}__input\'\n    class=\'form-control\'\n    style=\'resize: none;\'\n  ></textarea>\n';

RegateTextarea.markup = function (id) {
  return RegateTextarea.getMarkup().replace(/{id}/g, id);
};

RegateTextarea.setMarkup = function (markup) {
  return RegateTextarea._markup = markup;
};

RegateTextarea.getMarkup = function () {
  return RegateTextarea._markup;
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
    _input.value = RegateContentEditable.DecodeEntities(value);
    _div.innerHTML = RegateContentEditable.DecodeEntities(value);
  }

  _div.oninput = function () {
    var html = _div.innerHTML;
    _input.value = html;
  };
};

RegateContentEditable.DecodeEntities = function (encodedString) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = encodedString;
  return textArea.value;
};

RegateContentEditable._markup = '\n  <div>\n    <textarea\n      id=\'{id}__input\'\n      style=\'display: none;\'\n    ></textarea>\n    <div\n      class=\'form-control\'\n      style=\'height: auto !important\'\n      id=\'{id}__div\'\n      contenteditable=\'true\'\n    ></div>\n  </div>\n';

RegateContentEditable.markup = function (id) {
  return RegateContentEditable.getMarkup().replace(/{id}/g, id);
};

RegateContentEditable.setMarkup = function (markup) {
  return RegateContentEditable._markup = markup;
};

RegateContentEditable.getMarkup = function () {
  return RegateContentEditable._markup;
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

  if (value !== undefined) _input.value = RegateCkeditor.DecodeEntities(value);

  ClassicEditor.create(_input);
};

RegateCkeditor.DecodeEntities = function (encodedString) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = encodedString;
  return textArea.value;
};

RegateCkeditor._markup = '\n  <textarea\n    id=\'{id}__input\'\n    class=\'form-control\'\n  ></textarea>\n';

RegateCkeditor.markup = function (id) {
  return RegateCkeditor.getMarkup().replace(/{id}/g, id);
};

RegateCkeditor.setMarkup = function (markup) {
  return RegateCkeditor._markup = markup;
};

RegateCkeditor.getMarkup = function () {
  return RegateCkeditor._markup;
};

exports.default = RegateCkeditor;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegateDropdown = {};

RegateDropdown.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? '' : _ref$placeholder,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? [] : _ref$options;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  var _option = document.createElement('option');
  _option.value = '';
  _option.text = placeholder;

  if (isRequired) _option.hidden = true;

  _input.appendChild(_option);

  options.forEach(function (option) {
    var _option = document.createElement('option');
    _option.value = option.key;
    _option.text = option.value;

    _input.appendChild(_option);
  });

  _input.value = value;

  if (isRequired === true) _input.required = true;

  /*
  if (isSelect2 === true) {
    if (typeof jQuery === typeof undefined)
      throw new Error('select2 need jQuery')
      if (typeof jQuery.fn.select2 === typeof undefined)
      throw new Error('select2 is not loaded in the page')
      $(_input).select2()
  }
  */
};

RegateDropdown._markup = '\n  <select\n    id=\'{id}__input\'\n    class=\'form-control\'\n  ></select>\n';

RegateDropdown.markup = function (id) {
  return RegateDropdown.getMarkup().replace(/{id}/g, id);
};

RegateDropdown.setMarkup = function (markup) {
  return RegateDropdown._markup = markup;
};

RegateDropdown.getMarkup = function () {
  return RegateDropdown._markup;
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

RegateNumber._markup = '\n  <input\n    id=\'{id}__input\'\n    type=\'number\'\n    class=\'form-control\'\n  />\n';

RegateNumber.markup = function (id) {
  return RegateNumber.getMarkup().replace(/{id}/g, id);
};

RegateNumber.setMarkup = function (markup) {
  return RegateNumber._markup = markup;
};

RegateNumber.getMarkup = function () {
  return RegateNumber._markup;
};

exports.default = RegateNumber;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RegateKeyword = {};

RegateKeyword.init = function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        _ref$keywords = _ref.keywords,
        keywords = _ref$keywords === undefined ? [] : _ref$keywords;


    if (id === undefined) throw new Error('id is required');

    var _input = document.getElementById(id + '__input');

    if (_input === undefined) throw new Error('id is invalid');

    _input.name = name;

    // this component depends on Vue
    if ((typeof Vue === 'undefined' ? 'undefined' : _typeof(Vue)) === ( true ? 'undefined' : _typeof(undefined))) {
        console.log('please include Vuejs before using RegateKeyword');
        return false;
    }

    keywords = RegateKeyword.NormalizeKeywords(keywords);

    new Vue({
        el: '#' + id + '__app',
        data: {
            newTodoText: '',
            items: keywords
        },
        methods: {
            addNewTodo: function addNewTodo() {
                this.items.push(this.newTodoText);
                this.newTodoText = '';
            },
            deleteItem: function deleteItem(index) {
                this.items.splice(index, 1);
            },
            filterData: function filterData() {
                return this.items.filter(function (item) {
                    return item.length > 0;
                });
            },
            addItem: function addItem() {
                if (this.newTodoText) {
                    this.addNewTodo();
                }
            }
        }
    });
};

RegateKeyword.NormalizeKeywords = function (keywords) {
    return keywords ? Array.isArray(keywords) ? keywords : [keywords] : [];
};

RegateKeyword._markup = '\n  <div id=\'{id}__app\'>\n    <textarea\n      id=\'{id}__input\'\n      class=\'form-control\'\n      style=\'display: none\'\n    >{{filterData()}}</textarea>\n\n    <div>\n        <draggable :list="items" v-model="items" :options="{handle:\'.handle\'}">\n            <div v-for="(item, index) in items" style=\'margin-bottom: 2px;\'>\n                <div class="input-group">\n                    <div class="input-group-prepend handle">\n                        <span class="input-group-text">\n                            <i class="fa fa-fw fa-bars" style=\'opacity: 0.3;\'></i>\n                        </span>\n                    </div>\n                    \n                    <input class="form-control"\n                        type="text"\n                        v-model="items[index]"\n                        v-on:keydown.enter.prevent\n                    />\n\n                    <div class="input-group-append">\n                        <button type="button" class="btn btn-danger" v-on:click="deleteItem(index)">\n                            <i class="fa fa-fw fa-times"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </draggable>\n\n        <div class="input-group">\n            <div class="input-group-prepend" style=\'opacity: 0.5;\'>\n                <span class="input-group-text">\n                    <i class="fa fa-fw fa-bars" style=\'opacity: 0.3;\'></i>\n                </span>\n                \n            </div>\n            \n            <input class="form-control"\n                type="text"\n                v-model="newTodoText"\n                v-on:keyup.enter="addItem"\n                v-on:keydown.enter.prevent\n            />\n\n            <div class="input-group-append">\n                <button type="button" class="btn btn-success" v-on:click="addItem">\n                    <i class="fa fa-fw fa-plus"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n  </div>\n';

RegateKeyword.markup = function (id) {
    return RegateKeyword.getMarkup().replace(/{id}/g, id);
};

RegateKeyword.setMarkup = function (markup) {
    return RegateKeyword._markup = markup;
};

RegateKeyword.getMarkup = function () {
    return RegateKeyword._markup;
};

exports.default = RegateKeyword;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegatePersianDateTimePicker = {};

RegatePersianDateTimePicker.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
      _ref$hasTimePicker = _ref.hasTimePicker,
      hasTimePicker = _ref$hasTimePicker === undefined ? false : _ref$hasTimePicker,
      _ref$isTimeFrom = _ref.isTimeFrom,
      isTimeFrom = _ref$isTimeFrom === undefined ? false : _ref$isTimeFrom,
      _ref$isTimeTill = _ref.isTimeTill,
      isTimeTill = _ref$isTimeTill === undefined ? false : _ref$isTimeTill,
      _ref$isNow = _ref.isNow,
      isNow = _ref$isNow === undefined ? false : _ref$isNow;


  if (id === undefined) throw new Error('id is required');

  var _inputShamsi = document.getElementById(id + '__shamsi');
  var _inputMiladi = document.getElementById(id + '__miladi');
  var _clear = document.getElementById(id + '__clear');

  if (_inputShamsi === undefined) throw new Error('id is invalid');

  _inputMiladi.name = name;

  if (isRequired === true) _inputShamsi.required = true;

  var options = {
    targetTextSelector: '#' + id + '__shamsi',
    targetDateSelector: '#' + id + '__miladi',
    isGregorian: false,
    enableTimePicker: false,
    yearOffset: 100,
    dateFormat: 'yyyy/MM/dd',
    textFormat: 'yyyy/MM/dd'
  };

  if (hasTimePicker) {
    options.enableTimePicker = true;
    options.dateFormat = 'yyyy/MM/dd HH:mm:ss';
    options.textFormat = 'yyyy/MM/dd HH:mm:ss';
  }

  if (isTimeFrom) options.dateFormat = 'yyyy/MM/dd 00:00:00';

  if (isTimeTill) options.dateFormat = 'yyyy/MM/dd 23:59:59';

  $('#' + id).MdPersianDateTimePicker(options);

  if (value) $('#' + id).MdPersianDateTimePicker('setDate', new Date(value));

  if (isNow) $('#' + id).MdPersianDateTimePicker('setDate', new Date());

  _clear.onclick = function () {
    $('#' + id).MdPersianDateTimePicker('clearDate');
  };
};

RegatePersianDateTimePicker._markup = '\n<div class=\'input-group\'>\n  <div class=\'input-group-prepend\'>\n      <span class=\'input-group-text cursor-pointer\' id=\'{id}\' style=\'cursor: pointer;\'>\n        <i class=\'fa fa-calendar-alt\'></i>\n      </span>\n  </div>\n  <input\n    type=\'text\'\n    style=\'pointer-events: none;\'\n    onfocus=\'this.blur();\'\n    id=\'{id}__shamsi\'\n    class=\'form-control\'\n  />\n  <div class=\'input-group-append\'>\n      <span class=\'input-group-text cursor-pointer\' id=\'{id}__clear\' style=\'cursor: pointer;\'>\n        <i class=\'fa fa-times\'></i>\n      </span>\n  </div>\n  <input type=\'hidden\' id=\'{id}__miladi\' class=\'form-control\' />\n</div>\n';

RegatePersianDateTimePicker.markup = function (id) {
  return RegatePersianDateTimePicker.getMarkup().replace(/{id}/g, id);
};

RegatePersianDateTimePicker.setMarkup = function (markup) {
  return RegatePersianDateTimePicker._markup = markup;
};

RegatePersianDateTimePicker.getMarkup = function () {
  return RegatePersianDateTimePicker._markup;
};

exports.default = RegatePersianDateTimePicker;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RegateSwitch = {};

RegateSwitch.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$isChecked = _ref.isChecked,
      isChecked = _ref$isChecked === undefined ? false : _ref$isChecked,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? RegateSwitch.Size.Medium : _ref$size;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  if ((typeof Switch === 'undefined' ? 'undefined' : _typeof(Switch)) === ( true ? 'undefined' : _typeof(undefined))) throw new Error('Switch plugin does not loaded in the page');

  new Switch(_input, {
    size: size,
    checked: isChecked
  });
};

RegateSwitch.Size = {
  'Small': 'small',
  'Medium': 'default',
  'Large': 'large'
};

RegateSwitch._markup = '\n  <input\n    id=\'{id}__input\'\n    type=\'checkbox\'\n    value=\'true\'\n  />\n';

RegateSwitch.markup = function (id) {
  return RegateSwitch.getMarkup().replace(/{id}/g, id);
};

RegateSwitch.setMarkup = function (markup) {
  return RegateSwitch._markup = markup;
};

RegateSwitch.getMarkup = function () {
  return RegateSwitch._markup;
};

exports.default = RegateSwitch;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegateForeignKey = {};

RegateForeignKey.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      apiUrl = _ref.apiUrl,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? '' : _ref$placeholder,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  if (apiUrl === undefined) throw new Error('apiUrl is required');

  _input.name = name;

  var _option = document.createElement('option');
  _option.value = '';
  _option.text = placeholder;

  if (isRequired) _option.hidden = true;

  _input.appendChild(_option);

  if (value) {
    var _option2 = document.createElement('option');
    _option2.id = id + '__hidden_value_input';
    _option2.value = value;
    _option2.hidden = true;
    _input.appendChild(_option2);

    _input.value = value;
  }

  if (isRequired === true) _input.required = true;

  function makeResponseStandard(response) {
    var newResponseList = [];
    response.forEach(function (row) {
      var newResponseObject = {};
      newResponseObject.key = (row.Key || row.key || row.KEY || row.Id || row.id || row.ID).toString();
      newResponseObject.value = (row.Value || row.value || row.VALUE || row.Title || row.title || row.TITLE).toString();

      newResponseList.push(newResponseObject);
    });

    return newResponseList;
  }

  function sendRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', apiUrl, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var response = JSON.parse(request.responseText);
        response = makeResponseStandard(response);
        callback(response);
      } else {
        // We reached our target server, but it returned an error
      }
    };

    request.onerror = function () {
      // There was a connection error of some sort
    };

    request.send();
  }

  function callback(options) {
    options.forEach(function (option) {
      var _option = document.createElement('option');
      _option.value = option.key;
      _option.text = option.value;

      _input.appendChild(_option);
    });

    var _hiddenValueInput = document.getElementById(id + '__hidden_value_input');
    if (_hiddenValueInput) _hiddenValueInput.value = '';

    _input.value = value;
  }

  sendRequest();
};

RegateForeignKey._markup = '\n  <select\n    id=\'{id}__input\'\n    class=\'form-control\'\n  ></select>\n';

RegateForeignKey.markup = function (id) {
  return RegateForeignKey.getMarkup().replace(/{id}/g, id);
};

RegateForeignKey.setMarkup = function (markup) {
  return RegateForeignKey._markup = markup;
};

RegateForeignKey.getMarkup = function () {
  return RegateForeignKey._markup;
};

exports.default = RegateForeignKey;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegateTextMulti = {};

RegateTextMulti.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired;

  function insertBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
  }

  function removeOldOnes() {
    var list = document.querySelectorAll('[data-group-id=\'' + id + '\']');

    for (var i = list.length - 1; 0 <= i; i--) {
      if (list[i] && list[i].parentElement) {
        list[i].parentElement.removeChild(list[i]);
      }
    }
  }

  function getLines() {
    return _input.value.split('\n').map(function (line) {
      return line.trim();
    }).filter(function (line) {
      return line.length > 0;
    });
  }

  function createNewOnes(lines) {
    for (var j = 0; j < lines.length; j++) {
      var input = document.createElement('input');

      input.setAttribute('type', 'hidden');
      input.setAttribute('value', lines[j]);
      input.setAttribute('name', name);
      input.setAttribute('data-group-id', id);

      insertBefore(input, _input);
    }
  }

  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  if (isRequired === true) _input.required = true;

  _input.value = value;

  _input.style.height = 200 + 'px';

  function handleInput() {
    removeOldOnes();

    var lines = getLines();
    createNewOnes(lines);
  }

  _input.oninput = handleInput;

  handleInput();
};

RegateTextMulti._markup = '\n  <textarea\n    id=\'{id}__input\'\n    class=\'form-control\'\n    style=\'resize: none;\'\n  ></textarea>\n';

RegateTextMulti.markup = function (id) {
  return RegateTextMulti.getMarkup().replace(/{id}/g, id);
};

RegateTextMulti.setMarkup = function (markup) {
  return RegateTextMulti._markup = markup;
};

RegateTextMulti.getMarkup = function () {
  return RegateTextMulti._markup;
};

exports.default = RegateTextMulti;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegateTimePicker = {};

RegateTimePicker.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  if (isRequired === true) _input.required = true;

  if (value !== undefined) _input.value = value;

  flatpickr(_input, {
    dateFormat: 'H:i:S',
    enableSeconds: true,
    enableTime: true,
    allowInput: true,
    noCalendar: true,
    time_24hr: true
  });
};

RegateTimePicker.update = function (id, value) {
  var _input = document.getElementById(id + '__input');
  _input.value = value;
};

RegateTimePicker._markup = '\n  <input\n    id=\'{id}__input\'\n    type=\'text\'\n    class=\'form-control\'\n  />\n';

RegateTimePicker.markup = function (id) {
  return RegateTimePicker.getMarkup().replace(/{id}/g, id);
};

RegateTimePicker.setMarkup = function (markup) {
  return RegateTimePicker._markup = markup;
};

RegateTimePicker.getMarkup = function () {
  return RegateTimePicker._markup;
};

exports.default = RegateTimePicker;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InteractiveBoolean = {};

InteractiveBoolean.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$apiUrl = _ref.apiUrl,
      apiUrl = _ref$apiUrl === undefined ? '' : _ref$apiUrl,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? null : _ref$value,
      _ref$isNullable = _ref.isNullable,
      isNullable = _ref$isNullable === undefined ? false : _ref$isNullable,
      _ref$isRequestHeaderJ = _ref.isRequestHeaderJson,
      isRequestHeaderJson = _ref$isRequestHeaderJ === undefined ? false : _ref$isRequestHeaderJ;


  if (id === undefined) throw new Error('id is required');

  var _null = document.getElementById(id + '__null');
  var _true = document.getElementById(id + '__true');
  var _false = document.getElementById(id + '__false');
  var _loading = document.getElementById(id + '__loading');

  showStatusIndicator(value);

  function showLoading() {
    _true.style.display = 'none';
    _false.style.display = 'none';
    _null.style.display = 'none';
    _loading.style.display = '';
  }

  function normalizeStatus(status) {
    if (status === true) return true;

    if (status === 'true') return true;

    if (status === false) return false;

    if (status === 'false') return false;

    return status;
  }

  function showStatusIndicator(status) {
    _loading.style.display = 'none';
    _true.style.display = 'none';
    _false.style.display = 'none';
    _null.style.display = 'none';

    if (normalizeStatus(status) === true) _true.style.display = '';else if (normalizeStatus(status) === false) _false.style.display = '';else {
      if (isNullable) _null.style.display = '';else _false.style.display = '';
    }
  }

  function sendAjaxRequest(status) {
    function JSON_to_URLEncoded(element, key, list) {
      var list = list || [];
      if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) == 'object') {
        for (var idx in element) {
          JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, list);
        }
      } else {
        list.push(key + '=' + encodeURIComponent(element));
      }
      return list.join('&');
    }

    var data = JSON_to_URLEncoded(_defineProperty({}, name, status));
    var request = new XMLHttpRequest();
    request.open('POST', apiUrl, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(data);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        var response = JSON.parse(request.response);
        showStatusIndicator(response.status);
      } else {
        // We reached our target server, but it returned an error
        console.log('something went wrong');
        console.log(request);
      }
    };
  }

  function handle(newStatus) {
    showLoading();
    sendAjaxRequest(newStatus);
  }

  _null.onclick = function (e) {
    return handle(true);
  };
  _true.onclick = function (e) {
    return handle(false);
  };
  _false.onclick = function (e) {
    return handle(isNullable ? null : true);
  };
};

InteractiveBoolean._markup = '\n  <i id=\'{id}__true\'\n     class=\'fa fa-circle text-success\'\n     style=\'display: none; cursor: pointer;\'></i>\n\n  <i id=\'{id}__false\'\n     class=\'fa fa-circle text-danger\'\n     style=\'display: none; cursor: pointer;\'></i>\n\n  <i id=\'{id}__null\'\n     class=\'fa fa-circle text-warning\'\n     style=\'display: none; cursor: pointer;\'></i>\n\n  <i id=\'{id}__loading\'\n     class=\'fa fa-spin fa-spinner text-mute\'\n     style=\'display: none;\'></i>\n';

InteractiveBoolean.markup = function (id) {
  return InteractiveBoolean.getMarkup().replace(/{id}/g, id);
};

InteractiveBoolean.setMarkup = function (markup) {
  return InteractiveBoolean._markup = markup;
};

InteractiveBoolean.getMarkup = function () {
  return InteractiveBoolean._markup;
};

exports.default = InteractiveBoolean;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegatePrice = {};

RegatePrice.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
      _ref$isTargetRial = _ref.isTargetRial,
      isTargetRial = _ref$isTargetRial === undefined ? false : _ref$isTargetRial,
      _ref$isPersian = _ref.isPersian,
      isPersian = _ref$isPersian === undefined ? false : _ref$isPersian;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');
  var _hidden = document.getElementById(id + '__hidden');

  if (_input === undefined) throw new Error('id is invalid');

  _hidden.name = name;

  if (isRequired === true) _input.required = true;

  if (value !== undefined) RegatePrice.update(id, value);

  _input.onkeypress = function (event) {
    if (!isNumberKey(event)) {
      event.preventDefault();
    }
  };

  _input.oninput = function () {
    sync();
  };

  /* utility functions */
  var price = value;

  var sync = function sync() {
    if (_input.value) {
      var mainElement = toLatinDigit(_input.value);
      var originPrice = parseFloat(mainElement.toString().replace(/,/g, ''));
      _input.value = separator(originPrice);
      if (isTargetRial) {
        _hidden.value = originPrice * 10;
      } else {
        _hidden.value = originPrice;
      }

      if (isPersian) {
        _input.value = toPersianDigit(_input.value);
      }
    } else {
      _hidden.value = "";
      if (price && validNumeric(price)) {
        var _mainElement = toLatinDigit(price);
        var _originPrice = parseFloat(_mainElement.toString().replace(/,/g, ''));
        _input.value = separator(_originPrice);
        if (isTargetRial) {
          _hidden.value = _originPrice * 10;
        } else {
          _hidden.value = _originPrice;
        }

        if (isPersian) {
          _input.value = toPersianDigit(_input.value);
        }
      }
    }
  };

  var separator = function separator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  var isNumberKey = function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 1632 || charCode > 1641) && (charCode < 1776 || charCode > 1785)) return false;

    return true;
  };

  var validNumeric = function validNumeric(number) {
    var numbers = /^[0-9۰-۹٠-٩]+$/;
    if (number.toString().replace(/,/g, '').match(numbers)) {
      return true;
    } else {
      return false;
    }
  };

  var toLatinDigit = function toLatinDigit(m) {

    var num = { "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9" };
    return m.toString().replace(/./g, function (c) {
      return typeof num[c] === "undefined" ? /\d+/.test(c) ? c : '' : num[c];
    });
  };

  var toPersianDigit = function toPersianDigit(m) {
    if (m.trim() == "") return "";
    for (var i = 0; i < m.length; i++) {
      //۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹
      m = m.replace("0", "۰");
      m = m.replace("1", "۱");
      m = m.replace("2", "۲");
      m = m.replace("3", "۳");
      m = m.replace("4", "۴");
      m = m.replace("5", "۵");
      m = m.replace("6", "۶");
      m = m.replace("7", "۷");
      m = m.replace("8", "۸");
      m = m.replace("9", "۹");
    }

    return m;
  };
  /* /utility functions */

  sync();
};

RegatePrice.update = function (id, value) {
  var _input = document.getElementById(id + '__input');
  var _hidden = document.getElementById(id + '__hidden');
};

RegatePrice._markup = '\n  <input\n    id=\'{id}__input\'\n    type=\'text\'\n    class=\'form-control\'\n  />\n  <input\n    id=\'{id}__hidden\'\n    type=\'text\'\n    class=\'form-control\'\n  />\n';

RegatePrice.markup = function (id) {
  return RegatePrice.getMarkup().replace(/{id}/g, id);
};

RegatePrice.setMarkup = function (markup) {
  return RegatePrice._markup = markup;
};

RegatePrice.getMarkup = function () {
  return RegatePrice._markup;
};

exports.default = RegatePrice;

/***/ })
/******/ ]);
});