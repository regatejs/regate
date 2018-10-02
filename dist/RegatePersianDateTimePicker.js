'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RegatePersianDateTimePicker = {};

RegatePersianDateTimePicker.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
      _ref$hasTimePicker = _ref.hasTimePicker,
      hasTimePicker = _ref$hasTimePicker === undefined ? false : _ref$hasTimePicker,
      _ref$isTimeFrom = _ref.isTimeFrom,
      isTimeFrom = _ref$isTimeFrom === undefined ? false : _ref$isTimeFrom,
      _ref$isTimeTill = _ref.isTimeTill,
      isTimeTill = _ref$isTimeTill === undefined ? false : _ref$isTimeTill,
      _ref$isNow = _ref.isNow,
      isNow = _ref$isNow === undefined ? false : _ref$isNow;


  if (id === undefined) throw new Error('id is required');

  var _inputShamsi = document.getElementById(id + '__shamsi');
  var _inputMiladi = document.getElementById(id + '__miladi');

  if (_inputShamsi === undefined) throw new Error('id is invalid');

  _inputMiladi.name = name;

  if (isRequired === true) _inputShamsi.required = true;

  var options = {
    targetTextSelector: '#' + id + '__shamsi',
    targetDateSelector: '#' + id + '__miladi',
    isGregorian: false,
    enableTimePicker: false,
    yearOffset: 100,
    dateFormat: 'yyyy/MM/dd',
    textFormat: 'yyyy/MM/dd'
  };

  if (hasTimePicker) {
    options.enableTimePicker = true;
    options.dateFormat = 'yyyy/MM/dd HH:mm:ss';
    options.textFormat = 'yyyy/MM/dd HH:mm:ss';
  }

  if (isTimeFrom) options.dateFormat = 'yyyy/MM/dd 00:00:00';

  if (isTimeTill) options.dateFormat = 'yyyy/MM/dd 23:59:59';

  $('#' + id).MdPersianDateTimePicker(options);

  if (value) $('#' + id).MdPersianDateTimePicker('setDate', new Date(value));

  if (isNow) $('#' + id).MdPersianDateTimePicker('setDate', new Date());
};

RegatePersianDateTimePicker.markup = function (id) {
  return '\n<div class="input-group">\n  <div class="input-group-prepend">\n      <span class="input-group-text cursor-pointer" id="' + id + '" style=\'cursor: pointer;\'>\n        <i class="fa fa-calendar-alt"></i>\n      </span>\n  </div>\n  <input\n    type="text"\n    style=\'pointer-events: none;\'\n    onfocus=\'this.blur();\'\n    id="' + id + '__shamsi"\n    class="form-control"\n  />\n  <input type="hidden" id="' + id + '__miladi" class="form-control" />\n</div>\n';
};

exports.default = RegatePersianDateTimePicker;