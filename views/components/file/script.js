function initRegateFile({
  uniqueId,
  name,
  value,
  isRequired,
  uploaderUrl,
  repositoryUrl,
}) {
  var popup = function (url, title, w, h) {
    // Fixes dual-screen position             Most browsers    Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus();
    }

    return false;
  }

  var _container = document.getElementById(uniqueId);
  var _regate = _container.querySelector('[data-role=RegateFile]');
  var _input = _container.querySelector('[data-role=input]');
  var _remove = _container.querySelector('[data-role=remove]');
  var _view = _container.querySelector('[data-role=view]');
  var _upload = _container.querySelector('[data-role=upload]');
  
  _input.name = name;

  if (isRequired === true) {
    _input.required = true;
  }

  _remove.onclick = function () {
    _input.value = '';
    delete _regate.dataset.hasvalue;
    return false;
  };

  window['RegateFile__setterCallback'] = function (fieldName, fileName) {
    var _container = document.getElementById(fieldName);
    var _input = _container.querySelector('[data-role=input]');
    var _regate = _container.querySelector('[data-role=RegateFile]');
    var _view = _container.querySelector('[data-role=view]');

    _input.value = fileName;
    _regate.dataset.hasvalue = true;
    _view.href = repositoryUrl + fileName;
  };

  _upload.onclick = function () {
    popup(uploaderUrl + '?field=' + uniqueId, 'RegateFileUploader', 400, 600);
    return false;
  };

  if (value !== undefined && value !== '') {
    _input.value = value;
    _regate.dataset.hasvalue = true;
    _view.href = repositoryUrl + value;
  }
}
