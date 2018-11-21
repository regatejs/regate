'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegateTextClass = function () {
  function RegateTextClass(_ref) {
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

    _classCallCheck(this, RegateTextClass);

    this.id = id;
    this.name = name;
    this.value = value;
    this.isRequired = isRequired;
    this.placeholder = placeholder;
    this.onInitialized = onInitialized;
    this.onChange = onChange;
  }

  _createClass(RegateTextClass, [{
    key: 'getInput',
    value: function getInput() {
      if (this._input !== undefined) return this._input;

      this._input = document.getElementById(this.id + '__input');
      return this._input;
    }
  }, {
    key: 'getMarkup',
    value: function getMarkup() {
      return RegateTextClass.getMarkup().replace(/{id}/g, this.id);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.value;
    }
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      var _input = this.getInput();

      _input.name = name;

      if (this.isRequired === true) _input.required = true;

      if (this.value !== undefined) _input.value = value;

      if (this.placeholder !== undefined) _input.placeholder = placeholder;

      if (_typeof(this.onInitialized) === (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
        var isValid = this.isRequired ? this.value.length > 0 : true;

        onInitialized({ value: this.value, isValid: isValid });
      }

      if ((typeof onChange === 'undefined' ? 'undefined' : _typeof(onChange)) === (typeof Function === 'undefined' ? 'undefined' : _typeof(Function))) {
        _input.oninput = function () {
          var value = _input.value;

          var isValid = _this.isRequired ? value.length > 0 : true;

          onChange({ value: value, isValid: isValid });
        };
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var _input = this.getInput();
      this.value = value;
      _input.value = value;
    }
  }]);

  return RegateTextClass;
}();

exports.default = RegateTextClass;


RegateTextClass._markup = '\n  <input\n    id=\'{id}__input\'\n    type=\'text\'\n    class=\'form-control\'\n  />\n';

RegateTextClass.getMarkup = function () {
  return RegateTextClass._markup;
};

RegateTextClass.setMarkup = function (markup) {
  return RegateTextClass._markup = markup;
};