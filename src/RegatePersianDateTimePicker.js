const RegatePersianDateTimePicker = {}

RegatePersianDateTimePicker.init = function ({
  id,
  name,
  value = '',
  isRequired = false,
  hasTimepicker = false,
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _inputShamsi = document.getElementById(id + '__shamsi')
  const _inputMiladi = document.getElementById(id + '__miladi')

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

  if (hasTimepicker) {
    options.enableTimePicker = true
    options.dateFormat = 'yyyy/MM/dd HH:mm:ss'
    options.textFormat = 'yyyy/MM/dd HH:mm:ss'
  }

  $('#' + id).MdPersianDateTimePicker(options)

  if (value) {
    $('#' + id).MdPersianDateTimePicker('setDate', new Date(value))
  }
}

RegatePersianDateTimePicker.markup = (id) => `
<div class="input-group">
  <div class="input-group-prepend">
      <span class="input-group-text cursor-pointer" id="${id}" style='cursor: pointer;'>
        <i class="fa fa-calendar"></i>
      </span>
  </div>
  <input
    type="text"
    style='pointer-events: none;'
    onfocus='this.blur();'
    id="${id}__shamsi"
    class="form-control"
  />
  <input type="hidden" id="${id}__miladi" class="form-control" />
</div>
`

export default RegatePersianDateTimePicker
