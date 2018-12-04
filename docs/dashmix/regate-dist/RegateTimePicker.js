;(function () {
    window.Regate = window.Regate || {};
    

var smile = function() {}; smile({
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

window.Regate.RegateTimePicker = RegateTimePicker;
  }());