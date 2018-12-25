const RegateColor = {}

RegateColor.init = function ({
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

  // hello world again 3

}

RegateColor.update = (id, value) => {
  const _input = document.getElementById(id + '__input')
  _input.value = value
}

RegateColor._markup = `
  <input
    id='{id}__input'
    type='text'
    class='form-control'
  />
`

RegateColor.markup = id => {
  return RegateColor.getMarkup()
    .replace(/{id}/g, id)
}

RegateColor.setMarkup = markup =>
  RegateColor._markup = markup

RegateColor.getMarkup = () =>
  RegateColor._markup

export default RegateColor
