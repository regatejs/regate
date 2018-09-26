const RegateContentEditable = {}

RegateContentEditable.init = function ({
  id,
  name,
  value = '',
  isRequired = false,
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _input = document.getElementById(id + '__input')
  const _div = document.getElementById(id + '__div')

  if (_input === undefined)
    throw new Error('id is invalid')

  _input.name = name

  if (isRequired === true)
    _input.required = true

  if (value !== undefined) {
    console.log(value)
    _input.value = value
    _div.innerHTML = value
  }

  _div.oninput = () => {
    const html = _div.innerHTML
    _input.value = html
  }
}


RegateContentEditable.markup = (id) => `
  <div>
    <textarea
      id='${id}__input'
      class='form-control'
      style='display: none;'
    ></textarea>
    <div
      class='form-control'
      style='height: auto !important'
      id='${id}__div'
      contenteditable='true'
    ></div>
  </div>
`
export default RegateContentEditable
