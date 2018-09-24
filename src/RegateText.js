const RegateText = {}

RegateText.init = function ({
  id,
  name,
  value,
  isRequired,
  placeholder,
  onInitialized,
  onChange,
}) {

  if (id === undefined)
    throw new Error("id is required")

  var _container = document.getElementById(id)
  _container.insertAdjacentHTML('afterend', RegateText.markup(id))
  _container.parentNode.removeChild(_container)

  var _input = document.getElementById(id + '__input')

  _input.name = name

  if (isRequired === true)
    _input.required = true

  if (value !== undefined)
    _input.value = value

  if (placeholder !== undefined)
    _input.placeholder = placeholder

  if (typeof onInitialized === typeof Function) {
    const isValid = isRequired
      ? value !== undefined && value.length > 0
      : true

      onInitialized({value, isValid})
  }

  if (typeof onChange === typeof Function) {
    _input.oninput = () => {
      const value = _input.value

      const isValid = isRequired
        ? value !== undefined && value.length > 0
        : true

      onChange({value, isValid})
    }
  }
}


RegateText.markup = (id) => `
  <input
    id='${id}__input'
    type='text'
    class='form-control'
  />
`

export default RegateText
