function initRegateFile({
  uniqueId,
  name,
  value,
  isRequired,
  placeholder,
  onInitialized,
  onChange,
}) {
  var _container = document.getElementById(uniqueId)
  var _input = _container.querySelector('[data-role=input]')
  
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
