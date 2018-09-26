'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegateDropdown = {};

RegateDropdown.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
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
};

RegateDropdown.markup = function (id) {
  return '\n  <select\n    id=\'' + id + '__input\'\n    class=\'form-control\'\n  ></select>\n';
};
exports.default = RegateDropdown;