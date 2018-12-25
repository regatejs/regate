'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegateColor = {};

RegateColor.init = function (_ref) {
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

  // hello world again 3
};

RegateColor.update = function (id, value) {
  var _input = document.getElementById(id + '__input');
  _input.value = value;
};

RegateColor._markup = '\n  <input\n    id=\'{id}__input\'\n    type=\'text\'\n    class=\'form-control\'\n  />\n';

RegateColor.markup = function (id) {
  return RegateColor.getMarkup().replace(/{id}/g, id);
};

RegateColor.setMarkup = function (markup) {
  return RegateColor._markup = markup;
};

RegateColor.getMarkup = function () {
  return RegateColor._markup;
};

exports.default = RegateColor;