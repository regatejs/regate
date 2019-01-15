;(function () {
    window.Regate = window.Regate || {};
    window.Regate.version = '0.16.1';
    

var smile = function() {}; smile({
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

  var options = {
    el: '#' + id + '__color',

    default: 'transparent',

    components: {
      preview: true,
      opacity: false,
      hue: true,

      interaction: {
        hex: true,
        rgba: false,
        hsva: false,
        input: true,
        clear: true,
        save: true
      }
    },

    // User has clicked the save button
    onSave: function onSave(hsva) {
      // console.log(hsva)
      // console.log(instance)
      try {
        var hexCode = hsva.toHEX().toString();
        _input.value = hexCode;
      } catch (e) {
        _input.value = '';
      }
    }
  };

  if (isRequired === true) {
    _input.required = true;
    _input.value = '#444444';
    options.default = '#444444';
    options.components.interaction.clear = false;
  }

  if (value !== '') {
    _input.value = value;
    options.default = value;
  }

  var pickr = new Pickr(options);
};

RegateColor.update = function (id, value) {
  var _input = document.getElementById(id + '__input');
  _input.value = value;
};

RegateColor._markup = '\n  <input\n    id=\'{id}__input\'\n    type=\'text\'\n    style=\'position: absolute; pointer-events: none; opacity: 0; width: 0; height: 0;\'\n    z-index=\'-1\'\n    onfocus=\'this.blur()\'\n  />\n\n  <span id=\'{id}__color\'></span>\n';

RegateColor.markup = function (id) {
  return RegateColor.getMarkup().replace(/{id}/g, id);
};

RegateColor.setMarkup = function (markup) {
  return RegateColor._markup = markup;
};

RegateColor.getMarkup = function () {
  return RegateColor._markup;
};

window.Regate.RegateColor = RegateColor;
  }());