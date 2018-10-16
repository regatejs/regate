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

  if (isRequired === true)
    _input.required = true

  _input.style.height = 200 + 'px'

  _input.oninput = e => {
    const lines = _input.value.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)

    console.log(lines)
  }
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
