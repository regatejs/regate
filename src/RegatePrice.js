const RegatePrice = {}



RegatePrice.init = function ({
  id,
  name,
  value = '',
  isRequired = false,

  isTargetRial = false,
  isPersian = false,
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _input = document.getElementById(id + '__input')
  const _hidden = document.getElementById(id + '__hidden')

  if (_input === undefined)
    throw new Error('id is invalid')

  _hidden.name = name

  if (isRequired === true)
    _input.required = true

  if (value !== undefined)
    RegatePrice.update(id, value)

  _input.onkeypress = function (event) {
    if (!isNumberKey(event)) {
      event.preventDefault()
    }
  }

  _input.oninput = function () {
    sync()
  }

  /* utility functions */
  const price = value

  const sync = () => {
    if (_input.value) {
      const mainElement = toLatinDigit(_input.value);
      let originPrice = parseFloat(mainElement.toString().replace(/,/g, ''));
      _input.value = separator(originPrice);
      if (isTargetRial) {
        _hidden.value = originPrice * 10;
      } else {
        _hidden.value = originPrice;
      }

      if (isPersian) {
        _input.value = toPersianDigit(_input.value);
      }
    }
    else {
      _hidden.value = "";
      if (price && validNumeric(price)) {
        const mainElement = toLatinDigit(price);
        let originPrice = parseFloat(mainElement.toString().replace(/,/g, ''));
        _input.value = separator(originPrice)
        if (isTargetRial) {
          _hidden.value = originPrice * 10;
        } else {
          _hidden.value = originPrice;
        }

        if (isPersian) {
          _input.value = toPersianDigit(_input.value);
        }
      }
    }
  }

  const separator = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const isNumberKey = (evt) => {
    let charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 1632 || charCode > 1641) && (charCode < 1776 || charCode > 1785))
      return false;

    return true;
  }

  const validNumeric = (number) => {
    const numbers = /^[0-9۰-۹٠-٩]+$/;
    if (number.toString().replace(/,/g, '').match(numbers)) {
      return true;
    }
    else {
      return false;
    }
  }

  const toLatinDigit = (m) => {

    const num = { "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9" };
    return m.toString().replace(/./g,
      function (c) {
        return (typeof num[c] === "undefined") ? ((/\d+/.test(c)) ? c : '') : num[c];
      });
  }

  const toPersianDigit = (m) => {
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
  }
  /* /utility functions */

  sync()
}

RegatePrice.update = (id, value) => {
  const _input = document.getElementById(id + '__input')
  const _hidden = document.getElementById(id + '__hidden')
}

RegatePrice._markup = `
  <input
    id='{id}__input'
    type='text'
    class='form-control'
  />
  <input
    id='{id}__hidden'
    type='hidden'
    class='form-control'
  />
`

RegatePrice.markup = id => {
  return RegatePrice.getMarkup()
    .replace(/{id}/g, id)
}

RegatePrice.setMarkup = markup =>
  RegatePrice._markup = markup

RegatePrice.getMarkup = () =>
  RegatePrice._markup

export default RegatePrice
