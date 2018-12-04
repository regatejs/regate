;(function () {
    window.Regate = window.Regate || {};
    window.Regate.version = '0.15.0';
    

var smile = function() {}; smile({
  value: true
});
var RegateDropdown = {};

RegateDropdown.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? '' : _ref$placeholder,
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
  _option.text = placeholder;

  if (isRequired) _option.hidden = true;

  _input.appendChild(_option);

  options.forEach(function (option) {
    var _option = document.createElement('option');
    _option.value = option.key;
    _option.text = option.value;

    _input.appendChild(_option);
  });

  _input.value = value;

  if (isRequired === true) _input.required = true;

  /*
  if (isSelect2 === true) {
    if (typeof jQuery === typeof undefined)
      throw new Error('select2 need jQuery')
      if (typeof jQuery.fn.select2 === typeof undefined)
      throw new Error('select2 is not loaded in the page')
      $(_input).select2()
  }
  */
};

RegateDropdown._markup = '\n  <select\n    id=\'{id}__input\'\n    class=\'form-control\'\n  ></select>\n';

RegateDropdown.markup = function (id) {
  return RegateDropdown.getMarkup().replace(/{id}/g, id);
};

RegateDropdown.setMarkup = function (markup) {
  return RegateDropdown._markup = markup;
};

RegateDropdown.getMarkup = function () {
  return RegateDropdown._markup;
};

window.Regate.RegateDropdown = RegateDropdown;
  }());