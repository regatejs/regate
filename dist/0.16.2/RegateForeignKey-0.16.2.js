;(function () {
    window.Regate = window.Regate || {};
    window.Regate.version = '0.16.2';
    

var smile = function() {}; smile({
  value: true
});
var RegateForeignKey = {};

RegateForeignKey.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      apiUrl = _ref.apiUrl,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? '' : _ref$placeholder,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');

  if (_input === undefined) throw new Error('id is invalid');

  if (apiUrl === undefined) throw new Error('apiUrl is required');

  _input.name = name;

  var _option = document.createElement('option');
  _option.value = '';
  _option.text = placeholder;

  if (isRequired) _option.hidden = true;

  _input.appendChild(_option);

  if (value) {
    var _option2 = document.createElement('option');
    _option2.id = id + '__hidden_value_input';
    _option2.value = value;
    _option2.hidden = true;
    _input.appendChild(_option2);

    _input.value = value;
  }

  if (isRequired === true) _input.required = true;

  function makeResponseStandard(response) {
    var newResponseList = [];
    response.forEach(function (row) {
      var newResponseObject = {};
      newResponseObject.key = row.Key || row.key || row.KEY || row.Id || row.id || row.ID;
      newResponseObject.value = row.Value || row.value || row.VALUE || row.Title || row.title || row.TITLE;

      newResponseList.push(newResponseObject);
    });

    return newResponseList;
  }

  function sendRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', apiUrl, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var response = JSON.parse(request.responseText);
        response = makeResponseStandard(response);
        callback(response);
      } else {
        // We reached our target server, but it returned an error
      }
    };

    request.onerror = function () {
      // There was a connection error of some sort
    };

    request.send();
  }

  function callback(options) {
    options.forEach(function (option) {
      var _option = document.createElement('option');
      _option.value = option.key;
      _option.text = option.value;

      _input.appendChild(_option);
    });

    var _hiddenValueInput = document.getElementById(id + '__hidden_value_input');
    if (_hiddenValueInput) _hiddenValueInput.value = '';

    _input.value = value;
  }

  sendRequest();
};

RegateForeignKey._markup = '\n  <select\n    id=\'{id}__input\'\n    class=\'form-control\'\n  ></select>\n';

RegateForeignKey.markup = function (id) {
  return RegateForeignKey.getMarkup().replace(/{id}/g, id);
};

RegateForeignKey.setMarkup = function (markup) {
  return RegateForeignKey._markup = markup;
};

RegateForeignKey.getMarkup = function () {
  return RegateForeignKey._markup;
};

window.Regate.RegateForeignKey = RegateForeignKey;
  }());