const RegateSwitch = {}

RegateSwitch.init = function ({
  id,
  name,
  isChecked = false,
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _input = document.getElementById(id + '__input')

  if (_input === undefined)
    throw new Error('id is invalid')

  _input.name = name

  new Switch(_input, {
    size: 'large',
    checked: isChecked
  })
}



RegateSwitch._markup = `
  <input
    id='{id}__input'
    type='checkbox'
    value='true'
  />
`

RegateSwitch.markup = id => {
  return RegateSwitch.getMarkup()
    .replace(/{id}/g, id)
}

RegateSwitch.setMarkup = markup =>
  RegateSwitch._markup = markup

RegateSwitch.getMarkup = () =>
  RegateSwitch._markup

export default RegateSwitch
