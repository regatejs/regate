;(function () {
    window.Regate = window.Regate || {};
    

var smile = function() {}; smile({
  value: true
});
var RegatePrice = {};

RegatePrice.init = function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? '' : _ref$value,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === undefined ? false : _ref$isRequired,
      _ref$isTargetRial = _ref.isTargetRial,
      isTargetRial = _ref$isTargetRial === undefined ? false : _ref$isTargetRial,
      _ref$isPersian = _ref.isPersian,
      isPersian = _ref$isPersian === undefined ? false : _ref$isPersian;


  if (id === undefined) throw new Error('id is required');

  var _input = document.getElementById(id + '__input');
  var _hidden = document.getElementById(id + '__hidden');

  if (_input === undefined) throw new Error('id is invalid');

  _hidden.name = name;

  if (isRequired === true) _input.required = true;

  if (value !== undefined) RegatePrice.update(id, value);

  _input.onkeypress = function (event) {
    if (!isNumberKey(event)) {
      event.preventDefault();
    }
  };

  _input.oninput = function () {
    sync();
  };

  /* utility functions */
  var price = value;

  var sync = function sync() {
    if (_input.value) {
      var mainElement = toLatinDigit(_input.value);
      var originPrice = parseFloat(mainElement.toString().replace(/,/g, ''));
      _input.value = separator(originPrice);
      if (isTargetRial) {
        _hidden.value = originPrice * 10;
      } else {
        _hidden.value = originPrice;
      }

      if (isPersian) {
        _input.value = toPersianDigit(_input.value);
      }
    } else {
      _hidden.value = "";
      if (price && validNumeric(price)) {
        var _mainElement = toLatinDigit(price);
        var _originPrice = parseFloat(_mainElement.toString().replace(/,/g, ''));
        _input.value = separator(_originPrice);
        if (isTargetRial) {
          _hidden.value = _originPrice * 10;
        } else {
          _hidden.value = _originPrice;
        }

        if (isPersian) {
          _input.value = toPersianDigit(_input.value);
        }
        price = '';
      }
    }
  };

  var separator = function separator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  var isNumberKey = function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 1632 || charCode > 1641) && (charCode < 1776 || charCode > 1785)) return false;

    return true;
  };

  var validNumeric = function validNumeric(number) {
    var numbers = /^[0-9۰-۹٠-٩]+$/;
    if (number.toString().replace(/,/g, '').match(numbers)) {
      return true;
    } else {
      return false;
    }
  };

  var toLatinDigit = function toLatinDigit(m) {

    var num = { "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9" };
    return m.toString().replace(/./g, function (c) {
      return typeof num[c] === "undefined" ? /\d+/.test(c) ? c : '' : num[c];
    });
  };

  var toPersianDigit = function toPersianDigit(m) {
    if (m.trim() == "") return "";
    for (var i = 0; i < m.length; i++) {
      //۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹
      m = m.replace("0", "۰");
      m = m.replace("1", "۱");
      m = m.replace("2", "۲");
      m = m.replace("3", "۳");
      m = m.replace("4", "۴");
      m = m.replace("5", "۵");
      m = m.replace("6", "۶");
      m = m.replace("7", "۷");
      m = m.replace("8", "۸");
      m = m.replace("9", "۹");
    }

    return m;
  };
  /* /utility functions */

  sync();
};

RegatePrice.update = function (id, value) {
  var _input = document.getElementById(id + '__input');
  var _hidden = document.getElementById(id + '__hidden');
};

RegatePrice._markup = '\n  <input\n    id=\'{id}__input\'\n    type=\'text\'\n    class=\'form-control\'\n  />\n  <input\n    id=\'{id}__hidden\'\n    type=\'hidden\'\n    class=\'form-control\'\n  />\n';

RegatePrice.markup = function (id) {
  return RegatePrice.getMarkup().replace(/{id}/g, id);
};

RegatePrice.setMarkup = function (markup) {
  return RegatePrice._markup = markup;
};

RegatePrice.getMarkup = function () {
  return RegatePrice._markup;
};

window.Regate.RegatePrice = RegatePrice;
  }());