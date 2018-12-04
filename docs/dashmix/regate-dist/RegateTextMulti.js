;(function () {
    window.Regate = window.Regate || {};
    

var smile = function() {}; smile({
  value: true
});
var RegateTextMulti = {};

RegateTextMulti.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired;

  function insertBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
  }

  function removeOldOnes() {
    var list = document.querySelectorAll('[data-group-id=\'' + id + '\']');

    for (var i = list.length - 1; 0 <= i; i--) {
      if (list[i] && list[i].parentElement) {
        list[i].parentElement.removeChild(list[i]);
      }
    }
  }

  function getLines() {
    return _input.value.split('\n').map(function (line) {
      return line.trim();
    }).filter(function (line) {
      return line.length > 0;
    });
  }

  function createNewOnes(lines) {
    for (var j = 0; j < lines.length; j++) {
      var input = document.createElement('input');

      input.setAttribute('type', 'hidden');
      input.setAttribute('value', lines[j]);
      input.setAttribute('name', name);
      input.setAttribute('data-group-id', id);

      insertBefore(input, _input);
    }
  }

  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  if (isRequired === true) _input.required = true;

  _input.value = value;

  _input.style.height = 200 + 'px';

  function handleInput() {
    removeOldOnes();

    var lines = getLines();
    createNewOnes(lines);
  }

  _input.oninput = handleInput;

  handleInput();
};

RegateTextMulti._markup = '\n  <textarea\n    id=\'{id}__input\'\n    class=\'form-control\'\n    style=\'resize: none;\'\n  ></textarea>\n';

RegateTextMulti.markup = function (id) {
  return RegateTextMulti.getMarkup().replace(/{id}/g, id);
};

RegateTextMulti.setMarkup = function (markup) {
  return RegateTextMulti._markup = markup;
};

RegateTextMulti.getMarkup = function () {
  return RegateTextMulti._markup;
};

window.Regate.RegateTextMulti = RegateTextMulti;
  }());