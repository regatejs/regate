const RegateTimePicker = {}

RegateTimePicker.init = function ({
  id,
  name,
  value = '',
  isRequired = false,
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _input = document.getElementById(id + '__input')

  if (_input === undefined)
    throw new Error('id is invalid')

  _input.name = name

  if (isRequired === true)
    _input.required = true

  if (value !== undefined)
    _input.value = value

  flatpickr(_input, {
    dateFormat: 'H:i:S',
    enableSeconds: true,
    enableTime: true,
    allowInput: true,
    noCalendar: true,
    time_24hr: true,
  })
}

RegateTimePicker.update = (id, value) => {
  const _input = document.getElementById(id + '__input')
  _input.value = value
}

RegateTimePicker._markup = `
  <input
    id='{id}__input'
    type='text'
    class='form-control'
  />
`

RegateTimePicker.markup = id => {
  return RegateTimePicker.getMarkup()
    .replace(/{id}/g, id)
}

RegateTimePicker.setMarkup = markup =>
  RegateTimePicker._markup = markup

RegateTimePicker.getMarkup = () =>
  RegateTimePicker._markup

export default RegateTimePicker
