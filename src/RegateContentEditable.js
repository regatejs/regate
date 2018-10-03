const RegateContentEditable = {}

RegateContentEditable.init = function ({
  id,
  name,
  value = '',
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _input = document.getElementById(id + '__input')
  const _div = document.getElementById(id + '__div')

  if (_input === undefined)
    throw new Error('id is invalid')

  _input.name = name

  if (value !== undefined) {
    _input.value = RegateContentEditable.DecodeEntities(value)
    _div.innerHTML = RegateContentEditable.DecodeEntities(value)
  }

  _div.oninput = () => {
    const html = _div.innerHTML
    _input.value = html
  }
}

RegateContentEditable.DecodeEntities = encodedString => {
  var textArea = document.createElement('textarea')
  textArea.innerHTML = encodedString
  return textArea.value
}

RegateContentEditable._markup = `
  <div>
    <textarea
      id='{id}__input'
      style='display: none;'
    ></textarea>
    <div
      class='form-control'
      style='height: auto !important'
      id='{id}__div'
      contenteditable='true'
    ></div>
  </div>
`

RegateContentEditable.markup = id => {
  return RegateContentEditable.getMarkup()
    .replace(/{id}/g, id)
}

RegateContentEditable.setMarkup = markup =>
  RegateContentEditable._markup = markup

RegateContentEditable.getMarkup = () =>
  RegateContentEditable._markup

export default RegateContentEditable
