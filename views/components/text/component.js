function initRegateFile({
  uniqueId,
  name,
  value,
  isRequired,
  placeholder,
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
}
