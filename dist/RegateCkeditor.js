'use strict';

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
  if ((typeof ClassicEditor === 'undefined' ? 'undefined' : _typeof(ClassicEditor)) === (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
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