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
  const _color = document.getElementById(id + '__color')

  if (_input === undefined)
    throw new Error('id is invalid')

  _input.name = name

  if (isRequired === true)
    _input.required = true

  if (value !== undefined)
    _input.value = value

  const pickr = new Pickr({
    el: '#' + id + '__color',

    default: '#42445A',

    components: {

      preview: true,
      opacity: true,
      hue: true,

      interaction: {
        hex: true,
        rgba: true,
        hsva: true,
        input: true,
        clear: true,
        save: true
      }
    },

    // User has clicked the save button
    onSave(hsva, instance) {
      console.log(hsva)
      console.log(instance)
    },
  })
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

  <span id='{id}__color'></span>
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
