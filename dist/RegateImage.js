'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegateImage = {};

RegateImage.instances = {};

RegateImage.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
      _ref$uploaderUrl = _ref.uploaderUrl,
      uploaderUrl = _ref$uploaderUrl === undefined ? '/' : _ref$uploaderUrl,
      _ref$repositoryUrl = _ref.repositoryUrl,
      repositoryUrl = _ref$repositoryUrl === undefined ? '/' : _ref$repositoryUrl;


  var instance = {
    id: id,
    name: name,
    value: value,
    isRequired: isRequired,
    uploaderUrl: uploaderUrl,
    repositoryUrl: repositoryUrl
  };
  RegateImage.instances[id] = instance;

  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');
  var _remove = document.getElementById(id + '__remove');
  var _view = document.getElementById(id + '__view');
  var _upload = document.getElementById(id + '__upload');

  if (_input === undefined) throw new Error('id is invalid');

  _input.name = name;

  if (isRequired === true) _input.required = true;

  if (value !== undefined) RegateImage.set(id, value);

  var popup = function popup(url, title, w, h) {
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = width / 2 - w / 2 + dualScreenLeft;
    var top = height / 2 - h / 2 + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus();
    }

    return false;
  };

  _upload.onclick = function () {
    popup(uploaderUrl + '?id=' + id, 'RegateImageUploader', 400, 600);
    return false;
  };

  _remove.onclick = function () {
    RegateImage.set(id, '');
  };
};

RegateImage.markup = function (id) {
  return '\n  <div data-role=\'RegateImage\'>\n      <div class=\'input-group\'>\n          <div class=\'input-group-prepend\'>\n              <button type=\'button\'\n                      class=\'btn btn-secondary\'\n                      id=\'' + id + '__upload\'>\n                  <i class=\'fa fa-search mr-1\'></i> CHOOSE\n              </button>\n          </div>\n\n          <input type=\'text\'\n                  style=\'pointer-events: none;\'\n                  onfocus=\'this.blur();\'\n                  id=\'' + id + '__input\'\n                  class=\'form-control\' />\n\n          <div class=\'input-group-append\'>\n              <button type=\'button\' class=\'btn btn-outline-secondary\' id=\'' + id + '__remove\' style=\'display: none;\'>\n                  <i class=\'fa fa-fw fa-times\'></i>\n              </button>\n              <a href=\'#\' target=\'_blank\' class=\'btn btn-outline-secondary\' id=\'' + id + '__view\' style=\'display: none;\'>\n                  <i class=\'fa fa-fw fa-download\'></i>\n              </a>\n          </div>\n      </div>\n      \n      <img id=\'' + id + '__image\'\n        style=\'display: none; max-width: 200px; max-height: 150px;\'\n      />\n  </div>\n';
};

RegateImage.set = function (id, value) {
  var _input = document.getElementById(id + '__input');
  var _remove = document.getElementById(id + '__remove');
  var _view = document.getElementById(id + '__view');
  var _upload = document.getElementById(id + '__upload');
  var _image = document.getElementById(id + '__image');

  _input.value = value;

  if (value !== '') {
    _remove.style.display = 'flex';
    _view.style.display = 'flex';
    _upload.style.display = 'none';
    _image.style.display = 'block';

    _view.href = (RegateImage.instances[id].repositoryUrl || '') + value;
    _image.src = (RegateImage.instances[id].repositoryUrl || '') + value;
  } else {
    _remove.style.display = 'none';
    _view.style.display = 'none';
    _upload.style.display = 'flex';
    _image.style.display = 'none';

    _view.href = '';
    _image.src = '';
  }
};

exports.default = RegateImage;