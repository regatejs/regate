;(function () {
    window.Regate = window.Regate || {};
    

var smile = function() {}; smile({
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RegateSwitch = {};

RegateSwitch.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$isChecked = _ref.isChecked,
      isChecked = _ref$isChecked === undefined ? false : _ref$isChecked,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? RegateSwitch.Size.Medium : _ref$size;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  if ((typeof Switch === 'undefined' ? 'undefined' : _typeof(Switch)) === (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) throw new Error('Switch plugin does not loaded in the page');

  new Switch(_input, {
    size: size,
    checked: isChecked
  });
};

RegateSwitch.Size = {
  'Small': 'small',
  'Medium': 'default',
  'Large': 'large'
};

RegateSwitch._markup = '\n  <input\n    id=\'{id}__input\'\n    type=\'checkbox\'\n    value=\'true\'\n  />\n';

RegateSwitch.markup = function (id) {
  return RegateSwitch.getMarkup().replace(/{id}/g, id);
};

RegateSwitch.setMarkup = function (markup) {
  return RegateSwitch._markup = markup;
};

RegateSwitch.getMarkup = function () {
  return RegateSwitch._markup;
};

window.Regate.RegateSwitch = RegateSwitch;
  }());