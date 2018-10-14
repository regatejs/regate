const RegateForeignKey = {}

RegateForeignKey.init = function ({
  id,
  name,
  apiUrl,
  placeholder = '',
  isRequired = false,
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _input = document.getElementById(id + '__input')

  if (_input === undefined)
    throw new Error('id is invalid')

  if (apiUrl === undefined)
  throw new Error('apiUrl is required')

  _input.name = name

  const _option = document.createElement('option')
  _option.value = ''
  _option.text = placeholder

  if (isRequired)
    _option.hidden = true

  _input.appendChild(_option)

  function makeResponseStandard(response) {
    let newResponseList = []
    response.forEach(row => {
      let newResponseObject = {}
      newResponseObject.key = (row.Key || row.key || row.KEY || row.Id || row.id || row.ID).toString()
      newResponseObject.value = (row.Value || row.value || row.VALUE || row.Title || row.title || row.TITLE).toString()

      newResponseList.push(newResponseObject)
    })

    return newResponseList
  }

  function sendRequest() {
    var request = new XMLHttpRequest();
    request.open('GET', apiUrl, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var response = JSON.parse(request.responseText);
        response = makeResponseStandard(response)
        callback(response)
      } else {
        // We reached our target server, but it returned an error
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  }

  function callback(options) {
    console.log(options);
    return;

    options.forEach(option => {
      const _option = document.createElement('option')
      _option.value = option.key
      _option.text = option.value
      
      _input.appendChild(_option)
    })
  }

  sendRequest()
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
