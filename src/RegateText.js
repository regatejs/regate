const RegateText = {}

RegateText.init = function ({
  id,
  name,
  value = '',
  isRequired = false,
  placeholder = '',
  onInitialized,
  onChange,
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

  if (placeholder !== undefined)
    _input.placeholder = placeholder

  if (typeof onInitialized === typeof Function) {
    const isValid = isRequired
      ? value.length > 0
      : true

      onInitialized({value, isValid})
  }

  if (typeof onChange === typeof Function) {
    _input.oninput = () => {
      const value = _input.value

      const isValid = isRequired
        ? value.length > 0
        : true

      onChange({value, isValid})
    }
  }
}

RegateText.update = (id, value) => {
  const _input = document.getElementById(id + '__input')
  _input.value = value
}

RegateText._markup = `
  <input
    id='{id}__input'
    type='text'
    class='form-control'
  />
`

RegateText.markup = id => {
  return RegateText.getMarkup()
    .replace(/{id}/g, id)
}

RegateText.setMarkup = markup =>
  RegateText._markup = markup

RegateText.getMarkup = () =>
  RegateText._markup

export default RegateText
