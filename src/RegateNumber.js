const RegateNumber = {}

RegateNumber.init = function ({
  id,
  name,
  value = '',
  min,
  max,
  step,
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

  if (min !== undefined)
    _input.min = min

  if (max !== undefined)
    _input.max = max

  if (step !== undefined)
    _input.step = step
}


RegateNumber._markup = `
  <input
    id='{id}__input'
    type='number'
    class='form-control'
  />
`

RegateNumber.markup = id => {
  return RegateNumber.getMarkup()
    .replace(/{id}/g, id)
}

RegateNumber.setMarkup = markup =>
  RegateNumber._markup = markup

RegateNumber.getMarkup = () =>
  RegateNumber._markup

export default RegateNumber
