const RegateColorPicker = {}

RegateColorPicker.init = function ({
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

  
}

RegateColorPicker.update = (id, value) => {
  const _input = document.getElementById(id + '__input')
  _input.value = value
}

RegateColorPicker._markup = `
  <input
    id='{id}__input'
    type='text'
    class='form-control'
  />
`

RegateColorPicker.markup = id => {
  return RegateColorPicker.getMarkup()
    .replace(/{id}/g, id)
}

RegateColorPicker.setMarkup = markup =>
  RegateColorPicker._markup = markup

RegateColorPicker.getMarkup = () =>
  RegateColorPicker._markup

export default RegateColorPicker
