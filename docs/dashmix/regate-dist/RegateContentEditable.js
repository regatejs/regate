;(function () {
    window.Regate = window.Regate || {};
    

var smile = function() {}; smile({
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

window.Regate.RegateContentEditable = RegateContentEditable;
  }());