const RegateDropdown = {}

RegateDropdown.init = function ({
  id,
  name,
  value = '',
  isRequired = false,
  options = [],
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _input = document.getElementById(id + '__input')

  if (_input === undefined)
    throw new Error('id is invalid')

  _input.name = name

  const _option = document.createElement('option')
  _option.value = ''
  _option.text = ''
  _option.hidden = true
  _input.appendChild(_option)

  options.forEach(option => {
    const _option = document.createElement('option')
    _option.value = option.key
    _option.text = option.value
    
    _input.appendChild(_option)
  })
  
  _input.value = value

  if (isRequired === true)
    _input.required = true
}


RegateDropdown.markup = (id) => `
  <select
    id='${id}__input'
    class='form-control'
  ></select>
`
export default RegateDropdown
