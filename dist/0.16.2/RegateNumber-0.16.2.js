;(function () {
    window.Regate = window.Regate || {};
    window.Regate.version = '0.16.2';
    

var smile = function() {}; smile({
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

window.Regate.RegateNumber = RegateNumber;
  }());