const RegateTextMulti = {}

RegateTextMulti.init = function ({
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

  _input.style.height = size + 'px'
}

RegateTextMulti.Size = {
  'Small': 150,
  'Medium': 200,
  'Large': 300,
}

RegateTextMulti._markup = `
  <textarea
    id='{id}__input'
    class='form-control'
    style='resize: none;'
  ></textarea>
`

RegateTextMulti.markup = id => {
  return RegateTextMulti.getMarkup()
    .replace(/{id}/g, id)
}

RegateTextMulti.setMarkup = markup =>
  RegateTextMulti._markup = markup

RegateTextMulti.getMarkup = () =>
  RegateTextMulti._markup

export default RegateTextMulti
