const RemarkInteractiveBoolean = {}

RemarkInteractiveBoolean.init = function ({
  id,
  name,
  apiUrl = '',
  value = false,
}) {

  if (id === undefined)
    throw new Error('id is required')

  var _true = document.getElementById(`${id}__true`)
  var _false = document.getElementById(`${id}__false`)
  var _loading = document.getElementById(`${id}__loading`)

  if (value)
    _true.style.display = ''

  if (! value)
    _false.style.display = ''
}

RemarkInteractiveBoolean._markup = `
  <i class='fa fa-circle text-success' id='{id}__true' style='display: none;'></i>
  <i class='fa fa-circle text-danger' id='{id}__false' style='display: none;'></i>
  <i class='fa fa-spin fa-spinner text-mute' id='{id}__loading' style='display: none;'></i>
`

RemarkInteractiveBoolean.markup = id => {
  return RemarkInteractiveBoolean.getMarkup()
    .replace(/{id}/g, id)
}

RemarkInteractiveBoolean.setMarkup = markup =>
  RemarkInteractiveBoolean._markup = markup

RemarkInteractiveBoolean.getMarkup = () =>
  RemarkInteractiveBoolean._markup

export default RemarkInteractiveBoolean
