'use strict';

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