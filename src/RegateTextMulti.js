const RegateTextMulti = {}

RegateTextMulti.init = function ({
  id,
  name,
  value = '',
  isRequired = false,
}) {

  // create function, it expects 2 values.
  function insertAfter(newElement,targetElement) {
    // target is what you want it to go after. Look for this elements parent.
    var parent = targetElement.parentNode;

    // if the parents lastchild is the targetElement...
    if (parent.lastChild == targetElement) {
        // add the newElement after the target element.
        parent.appendChild(newElement);
    } else {
        // else the target has siblings, insert the new element between the target and it's next sibling.
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
  }

  function insertBefore(newNode, referenceNode) {
    referenceNode.parentNode
      .insertBefore(newNode, referenceNode)
  }

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

    const list = document.querySelectorAll(`[data-group-id='${id}']`)
    for (var i = list.length - 1; 0 <= i; i--) {
      if (list[i] && list[i].parentElement) {
        list[i].parentElement.removeChild(list[i])
      }
    }

    for (var j = 0; j < lines.length; j++) {
      const input = document.createElement('input')
      input.setAttribute('type', 'text')
      input.setAttribute('value', lines[j])
      input.setAttribute('name', name)
      input.setAttribute('data-group-id', id)
      insertBefore(input, _input)
    }
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
