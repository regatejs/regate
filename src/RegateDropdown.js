const RegateDropdown = {}

RegateDropdown.init = function ({
  id,
  name,
  value = '',
  options = [],
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _input = document.getElementById(id + '__input')

  if (_input === undefined)
    throw new Error('id is invalid')

  _input.name = name

  if (value !== undefined)
    _input.value = value

  options.forEach(option => {
    const _option = document.createElement('option')
    _option.value = option.key
    _option.text = option.value
    
    _input.appendChild(_option)
  })
  
}


RegateDropdown.markup = (id) => `
  <select
    id='${id}__input'
    class='form-control'
  ></select>
`
export default RegateDropdown
