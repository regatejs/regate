const RegateTextarea = {}

RegateTextarea.init = function ({
  id,
  name,
  value = '',
  isRequired = false,
  placeholder = '',
  size = 'medium',
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

  /*
   * size : small, medium, large
   */
  const sizePixel =
    size === 'small'  ? 150 :
    size === 'medium' ? 200 :
    size === 'large'  ? 300 : 200

  console.log(sizePixel)

  _input.style.height = sizePixel + 'px'
}


RegateTextarea.markup = (id) => `
  <textarea
    id='${id}__input'
    class='form-control'
    style='resize: none;'
  ></textarea>
`

export default RegateTextarea
