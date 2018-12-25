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

  

  const options = {
    el: '#' + id + '__color',

    components: {

      preview: true,
      opacity: false,
      hue: true,

      interaction: {
        hex: true,
        rgba: false,
        hsva: false,
        input: true,
        clear: true,
        save: true
      }
    },

    // User has clicked the save button
    onSave(hsva) {
      // console.log(hsva)
      // console.log(instance)
      const hexCode = hsva.toHEX().toString()
      _input.value = hexCode
    },
  }

  if (value !== undefined) {
    _input.value = value
    options.default = value
  }

  const pickr = new Pickr(options)
}

RegateColor.update = (id, value) => {
  const _input = document.getElementById(id + '__input')
  _input.value = value
}

RegateColor._markup = `
  <input
    id='{id}__input'
    type='text'
    style='position: absolute; pointer-events: none; opacity: 0; width: 0; height: 0;'
    z-index='-1'
    onfocus='this.blur()'
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
