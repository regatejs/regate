;(function () {
    window.Regate = window.Regate || {};
    window.Regate.version = '0.16.2';
    

var smile = function() {}; smile({
  value: true
});
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

  if (isChecked) _input.checked = true;
};

RegateSwitch.Size = {
  'Small': 'small',
  'Medium': 'default',
  'Large': 'large'
};

RegateSwitch._markup = '\n  <style>\n    #{id}__label {\n      position: relative;\n      margin-bottom: 0;\n      vertical-align: top;\n      display: inline-block;\n    }\n    \n    #{id}__label::before {\n      pointer-events: all;\n      border-radius: .5rem;\n      transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block;\n      width: 28px;\n      height: 16px;\n      content: "";\n      background-color: #fff;\n      border: #adb5bd solid 1px;\n      box-sizing: border-box;\n    }\n    \n    #{id}__label::after {\n      top: 2px;\n      left: 2px;\n      width: 12px;\n      height: 12px;\n      background-color: #adb5bd;\n      border-radius: .5rem;\n      transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;\n      transition: transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n      transition: transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;\n      box-sizing: border-box;\n      position: absolute;\n      display: block;\n      content: "";\n      background-repeat: no-repeat;\n      background-position: center center;\n      background-size: 50% 50%;\n    }\n    \n    #{id}__input {\n      position: absolute;\n      z-index: -1;\n      width: 0;\n      height: 0;\n      overflow: hidden;\n      pointer-events: none;\n    }\n    \n    #{id}__input:checked~#{id}__label::before {\n      color: #fff;\n      border-color: #007bff;\n      background-color: #007bff;\n    }\n    \n    #{id}__input:checked~#{id}__label::after {\n      background-color: #fff;\n      -webkit-transform: translateX(.75rem);\n      transform: translateX(.75rem);\n    }\n    \n    #{id}__input:focus~#{id}__label::before {\n      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);\n    }\n    \n    #{id}__input:checked~#{id}__label::before {\n      color: #fff;\n      border-color: #007bff;\n      background-color: #007bff;\n    }\n  </style>\n\n  <input\n    id=\'{id}__input\'\n    type=\'checkbox\'\n    value=\'true\'\n    tabindex="-1"\n  />\n\n  <label\n    id=\'{id}__label\'\n    for=\'{id}__input\'\n  ></label>\n';

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