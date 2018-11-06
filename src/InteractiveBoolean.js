const InteractiveBoolean = {}

InteractiveBoolean.init = function ({
  id,
  name,
  apiUrl = '',
  value = null,
  isNullable = false,
  isRequestHeaderJson = false,
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _null = document.getElementById(`${id}__null`)
  const _true = document.getElementById(`${id}__true`)
  const _false = document.getElementById(`${id}__false`)
  const _loading = document.getElementById(`${id}__loading`)

  showStatusIndicator(value)

  function showLoading() {
    _true.style.display = 'none'
    _false.style.display = 'none'
    _null.style.display = 'none'
    _loading.style.display = ''
  }

  function showStatusIndicator(status) {
    _loading.style.display = 'none'
    _true.style.display = 'none'
    _false.style.display = 'none'
    _null.style.display = 'none'

    if (status === true)
      _true.style.display = ''
    
    else if (status === false)
      _false.style.display = ''

    else {
      if (isNullable)
        _null.style.display = ''
      else
        _false.style.display = ''
    }
  }

  function sendAjaxRequest(status) {
    function JSON_to_URLEncoded(element,key,list){
      var list = list || [];
      if(typeof(element)=='object'){
        for (var idx in element)
          JSON_to_URLEncoded(element[idx],key?key+'['+idx+']':idx,list);
      } else {
        list.push(key+'='+encodeURIComponent(element));
      }
      return list.join('&');
    }

    const data = JSON_to_URLEncoded({ [name]: status })
    const request = new XMLHttpRequest()
    request.open('POST', apiUrl, true)
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    request.send(data)

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const response = JSON.parse(request.response)
        showStatusIndicator(response.status)
      } else {
        // We reached our target server, but it returned an error
        console.log('something went wrong')
        console.log(request)
      }
    }
  }

  function handle(newStatus) {
    showLoading()
    sendAjaxRequest(newStatus)
  }

  _null.onclick = e => handle(true)
  _true.onclick = e => handle(false)
  _false.onclick = e => handle(isNullable ? null : true)
}

InteractiveBoolean._markup = `
  <i id='{id}__true'
     class='fa fa-circle text-success'
     style='display: none; cursor: pointer;'></i>

  <i id='{id}__false'
     class='fa fa-circle text-danger'
     style='display: none; cursor: pointer;'></i>

  <i id='{id}__null'
     class='fa fa-circle text-warning'
     style='display: none; cursor: pointer;'></i>

  <i id='{id}__loading'
     class='fa fa-spin fa-spinner text-mute'
     style='display: none;'></i>
`

InteractiveBoolean.markup = id => {
  return InteractiveBoolean.getMarkup()
    .replace(/{id}/g, id)
}

InteractiveBoolean.setMarkup = markup =>
  InteractiveBoolean._markup = markup

InteractiveBoolean.getMarkup = () =>
  InteractiveBoolean._markup

export default InteractiveBoolean
