const RegatePersianDateTimePicker = {}

RegatePersianDateTimePicker.init = function ({
  id,
  name,
  value = '',
  isRequired = false,
  hasTimePicker = false,
  isTimeFrom = false,
  isTimeTill = false,
  isNow = false,
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _inputShamsi = document.getElementById(id + '__shamsi')
  const _inputMiladi = document.getElementById(id + '__miladi')
  const _clear = document.getElementById(id + '__clear')

  if (_inputShamsi === undefined)
    throw new Error('id is invalid')

  _inputMiladi.name = name

  if (isRequired === true)
    _inputShamsi.required = true

  const options = {
    targetTextSelector: '#' + id + '__shamsi',
    targetDateSelector: '#' + id + '__miladi',
    isGregorian: false,
    enableTimePicker: false,
    yearOffset: 100,
    dateFormat: 'yyyy/MM/dd',
    textFormat: 'yyyy/MM/dd',
  }

  if (hasTimePicker) {
    options.enableTimePicker = true
    options.dateFormat = 'yyyy/MM/dd HH:mm:ss'
    options.textFormat = 'yyyy/MM/dd HH:mm:ss'
  }

  if (isTimeFrom)
    options.dateFormat = 'yyyy/MM/dd 00:00:00'

  if (isTimeTill)
    options.dateFormat = 'yyyy/MM/dd 23:59:59'

  $('#' + id).MdPersianDateTimePicker(options)

  if (value)
    $('#' + id).MdPersianDateTimePicker('setDate', new Date(value))

  if (isNow)
    $('#' + id).MdPersianDateTimePicker('setDate', new Date())

  _clear.onclick = () => {
    $('#' + id).MdPersianDateTimePicker('clearDate')
  }
}

RegatePersianDateTimePicker._markup = `
<div class="input-group">
  <div class="input-group-prepend">
      <span class="input-group-text cursor-pointer" id="{id}" style='cursor: pointer;'>
        <i class="fa fa-calendar-alt"></i>
      </span>
  </div>
  <input
    type="text"
    style='pointer-events: none;'
    onfocus='this.blur();'
    id="{id}__shamsi"
    class="form-control"
  />
  <div class="input-group-append">
      <span class="input-group-text cursor-pointer" id="{id}__clear" style='cursor: pointer;'>
        <i class="fa fa-times"></i>
      </span>
  </div>
  <input type="hidden" id="{id}__miladi" class="form-control" />
</div>
`

RegatePersianDateTimePicker.markup = id => {
  return RegatePersianDateTimePicker.getMarkup()
    .replace(/{id}/g, id)
}

RegatePersianDateTimePicker.setMarkup = markup =>
  RegatePersianDateTimePicker._markup = markup

RegatePersianDateTimePicker.getMarkup = () =>
  RegatePersianDateTimePicker._markup

export default RegatePersianDateTimePicker
