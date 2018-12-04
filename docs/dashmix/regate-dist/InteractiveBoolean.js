;(function () {
    window.Regate = window.Regate || {};
    

var smile = function() {}; smile({
  value: true
});

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InteractiveBoolean = {};

InteractiveBoolean.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$apiUrl = _ref.apiUrl,
      apiUrl = _ref$apiUrl === undefined ? '' : _ref$apiUrl,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? null : _ref$value,
      _ref$isNullable = _ref.isNullable,
      isNullable = _ref$isNullable === undefined ? false : _ref$isNullable,
      _ref$isRequestHeaderJ = _ref.isRequestHeaderJson,
      isRequestHeaderJson = _ref$isRequestHeaderJ === undefined ? false : _ref$isRequestHeaderJ;


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

  function normalizeStatus(status) {
    if (status === true) return true;

    if (status === 'true') return true;

    if (status === false) return false;

    if (status === 'false') return false;

    return status;
  }

  function showStatusIndicator(status) {
    _loading.style.display = 'none';
    _true.style.display = 'none';
    _false.style.display = 'none';
    _null.style.display = 'none';

    if (normalizeStatus(status) === true) _true.style.display = '';else if (normalizeStatus(status) === false) _false.style.display = '';else {
      if (isNullable) _null.style.display = '';else _false.style.display = '';
    }
  }

  function sendAjaxRequest(status) {
    function JSON_to_URLEncoded(element, key, list) {
      var list = list || [];
      if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) == 'object') {
        for (var idx in element) {
          JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, list);
        }
      } else {
        list.push(key + '=' + encodeURIComponent(element));
      }
      return list.join('&');
    }

    var data = JSON_to_URLEncoded(_defineProperty({}, name, status));
    var request = new XMLHttpRequest();
    request.open('POST', apiUrl, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(data);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        var response = JSON.parse(request.response);
        showStatusIndicator(response.status);
      } else {
        // We reached our target server, but it returned an error
        console.log('something went wrong');
        console.log(request);
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

InteractiveBoolean._markup = '\n  <i id=\'{id}__true\'\n     class=\'fa fa-circle text-success\'\n     style=\'display: none; cursor: pointer;\'></i>\n\n  <i id=\'{id}__false\'\n     class=\'fa fa-circle text-danger\'\n     style=\'display: none; cursor: pointer;\'></i>\n\n  <i id=\'{id}__null\'\n     class=\'fa fa-circle text-warning\'\n     style=\'display: none; cursor: pointer;\'></i>\n\n  <i id=\'{id}__loading\'\n     class=\'fa fa-spin fa-spinner text-mute\'\n     style=\'display: none;\'></i>\n';

InteractiveBoolean.markup = function (id) {
  return InteractiveBoolean.getMarkup().replace(/{id}/g, id);
};

InteractiveBoolean.setMarkup = function (markup) {
  return InteractiveBoolean._markup = markup;
};

InteractiveBoolean.getMarkup = function () {
  return InteractiveBoolean._markup;
};

window.Regate.InteractiveBoolean = InteractiveBoolean;
  }());