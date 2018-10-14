const RegateForeignKey = {}

RegateForeignKey.init = function ({
  id,
  name,
  placeholder = '',
  isRequired = false,
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _input = document.getElementById(id + '__input')

  if (_input === undefined)
    throw new Error('id is invalid')

  _input.name = name

  const _option = document.createElement('option')
  _option.value = ''
  _option.text = placeholder

  if (isRequired)
    _option.hidden = true

  _input.appendChild(_option)


  function callback(options) {
    options.forEach(option => {
      const _option = document.createElement('option')
      _option.value = option.key
      _option.text = option.value
      
      _input.appendChild(_option)
    })
  }
}

RegateForeignKey._markup = `
  <select
    id='{id}__input'
    class='form-control'
  ></select>
`

RegateForeignKey.markup = id => {
  return RegateForeignKey.getMarkup()
    .replace(/{id}/g, id)
}

RegateForeignKey.setMarkup = markup =>
  RegateForeignKey._markup = markup

RegateForeignKey.getMarkup = () =>
  RegateForeignKey._markup

export default RegateForeignKey
