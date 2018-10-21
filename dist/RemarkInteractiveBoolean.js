'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RemarkInteractiveBoolean = {};

RemarkInteractiveBoolean.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$apiUrl = _ref.apiUrl,
      apiUrl = _ref$apiUrl === undefined ? '' : _ref$apiUrl,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? null : _ref$value,
      _ref$isNullable = _ref.isNullable,
      isNullable = _ref$isNullable === undefined ? false : _ref$isNullable;


  if (id === undefined) throw new Error('id is required');

  var _null = document.getElementById(id + '__null');
  var _true = document.getElementById(id + '__true');
  var _false = document.getElementById(id + '__false');
  var _loading = document.getElementById(id + '__loading');

  showStatusIndicator(value);

  function showLoading() {
    _true.style.display = 'none';
    _false.style.display = 'none';
    _null.style.display = 'none';
    _loading.style.display = '';
  }

  function showStatusIndicator(status) {
    _loading.style.display = 'none';
    _true.style.display = 'none';
    _false.style.display = 'none';
    _null.style.display = 'none';

    if (status === true) _true.style.display = '';else if (status === false) _false.style.display = '';else {
      if (isNullable) _null.style.display = '';else _false.style.display = '';
    }
  }

  function sendAjaxRequest(status) {
    var data = JSON.stringify({ status: status });
    var request = new XMLHttpRequest();
    request.open('POST', apiUrl, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(data);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        var response = JSON.parse(request.response);
        showStatusIndicator(response.status);
      } else {
        // We reached our target server, but it returned an error
        alert('something went wrong');
      }
    };
  }

  function handle(newStatus) {
    showLoading();
    sendAjaxRequest(newStatus);
  }

  _null.onclick = function (e) {
    return handle(true);
  };
  _true.onclick = function (e) {
    return handle(false);
  };
  _false.onclick = function (e) {
    return handle(isNullable ? null : true);
  };
};

RemarkInteractiveBoolean._markup = '\n  <i id=\'{id}__true\'\n     class=\'fa fa-circle text-success\'\n     style=\'display: none; cursor: pointer;\'></i>\n\n  <i id=\'{id}__false\'\n     class=\'fa fa-circle text-danger\'\n     style=\'display: none; cursor: pointer;\'></i>\n\n  <i id=\'{id}__null\'\n     class=\'fa fa-circle text-warning\'\n     style=\'display: none; cursor: pointer;\'></i>\n\n  <i id=\'{id}__loading\'\n     class=\'fa fa-spin fa-spinner text-mute\'\n     style=\'display: none;\'></i>\n';

RemarkInteractiveBoolean.markup = function (id) {
  return RemarkInteractiveBoolean.getMarkup().replace(/{id}/g, id);
};

RemarkInteractiveBoolean.setMarkup = function (markup) {
  return RemarkInteractiveBoolean._markup = markup;
};

RemarkInteractiveBoolean.getMarkup = function () {
  return RemarkInteractiveBoolean._markup;
};

exports.default = RemarkInteractiveBoolean;