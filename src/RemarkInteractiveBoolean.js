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
  else
    _false.style.display = ''

  function showLoading() {
    _true.style.display = 'none'
    _false.style.display = 'none'
    _loading.style.display = ''
  }

  function showStatusIndicator(status) {
    _loading.style.display = 'none'
    _true.style.display = 'none'
    _false.style.display = 'none'

    if (status)
      _true.style.display = ''
    
    else
      _false.style.display = ''
  }

  function sendAjaxRequest(status) {
    const data = { status }
    const request = new XMLHttpRequest()
    request.open('POST', apiUrl, true)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    request.send(data)

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        // var resp = request.responseText;
        showStatusIndicator(status)
      } else {
        // We reached our target server, but it returned an error
      }
    }
  }

  function handle(newStatus) {
    showLoading()
    sendAjaxRequest(newStatus)
  }

  _true.onclick = e => handle(false)
  _false.onclick = e => handle(true)
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
