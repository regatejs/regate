'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RegateText = {};

RegateText.init = function (_ref) {
  var uniqueId = _ref.uniqueId,
      name = _ref.name,
      value = _ref.value,
      isRequired = _ref.isRequired,
      placeholder = _ref.placeholder,
      onInitialized = _ref.onInitialized,
      onChange = _ref.onChange;

  var _container = document.getElementById(uniqueId);
  var _input = _container.querySelector('[data-role=input]');

  _input.name = name;

  if (isRequired === true) _input.required = true;

  if (value !== undefined) _input.value = value;

  if (placeholder !== undefined) _input.placeholder = placeholder;

  if ((typeof onInitialized === 'undefined' ? 'undefined' : _typeof(onInitialized)) === (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
    var isValid = isRequired ? value !== undefined && value.length > 0 : true;

    onInitialized({ value: value, isValid: isValid });
  }

  if ((typeof onChange === 'undefined' ? 'undefined' : _typeof(onChange)) === (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
    _input.oninput = function () {
      var value = _input.value;

      var isValid = isRequired ? value !== undefined && value.length > 0 : true;

      onChange({ value: value, isValid: isValid });
    };
  }
};

RegateText.markup = function (shouldWrite) {
  var markup = '\n    <input\n      data-role=\'input\'\n      type=\'text\'\n      class=\'form-control\'\n    />\n  ';

  if (shouldWrite) {
    document.write(markup);
  }

  return markup;
};

exports.default = RegateText;