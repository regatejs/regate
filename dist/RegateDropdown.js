'use strict';

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
    if ((typeof jQuery === 'undefined' ? 'undefined' : _typeof(jQuery)) === (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) throw new Error('select2 need jQuery');

    if (_typeof(jQuery.fn.select2) === (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) throw new Error('select2 is not loaded in the page');

    $(_input).select2();
  }
};

RegateDropdown.markup = function (id) {
  return '\n  <select\n    id=\'' + id + '__input\'\n    class=\'form-control\'\n  ></select>\n';
};
exports.default = RegateDropdown;