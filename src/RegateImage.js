const RegateImage = {}

RegateImage.instances = {}

RegateImage.init = function ({
  id,
  name,
  value = '',
  isRequired = false,
  uploaderUrl = '/',
  repositoryUrl = '/',
}) {

  const instance = {
    id,
    name,
    value,
    isRequired,
    uploaderUrl,
    repositoryUrl,
  }
  RegateImage.instances[id] = instance

  if (id === undefined)
    throw new Error('id is required')

  var _input = document.getElementById(id + '__input')
  var _remove = document.getElementById(id + '__remove')
  var _view = document.getElementById(id + '__view')
  var _upload = document.getElementById(id + '__upload')

  if (_input === undefined)
    throw new Error('id is invalid')

  _input.name = name

  if (isRequired === true)
    _input.required = true

  if (value !== undefined)
    RegateImage.set(id, value)

    const popup = function (url, title, w, h) {
      const dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left
      const dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top

      const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
      const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

      const left = ((width / 2) - (w / 2)) + dualScreenLeft
      const top = ((height / 2) - (h / 2)) + dualScreenTop
      const newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

      // Puts focus on the newWindow
      if (window.focus) {
        newWindow.focus()
      }

      return false
  }

  _upload.onclick = () => {
    popup(uploaderUrl + '?id=' + id, 'RegateImageUploader', 400, 600)
    return false
  }

  _remove.onclick = () => {
    RegateImage.set(id, '')
  }
}

RegateImage.set = (id, value) => {
  const _input = document.getElementById(id + '__input')
  const _remove = document.getElementById(id + '__remove')
  const _view = document.getElementById(id + '__view')
  const _upload = document.getElementById(id + '__upload')
  const _image = document.getElementById(id + '__image')

  _input.value = value

  if (value !== '') {
    _remove.style.display = ''
    _view.style.display = ''
    _upload.style.display = 'none'
    _image.style.display = 'block'

    _view.href = (RegateImage.instances[id].repositoryUrl || '') + value
    _image.src = (RegateImage.instances[id].repositoryUrl || '') + value
  }
  else {
    _remove.style.display = 'none'
    _view.style.display = 'none'
    _upload.style.display = ''
    _image.style.display = 'none'

    _view.href = ''
    _image.src = ''
  }
}

RegateImage._markup = `
  <div>
      <div class='input-group'>
          <div class='input-group-prepend'>
              <button type='button'
                      class='btn btn-secondary'
                      id='{id}__upload'>
                  <i class='fa fa-search mr-1'></i> CHOOSE
              </button>
          </div>

          <input type='text'
                  style='pointer-events: none;'
                  onfocus='this.blur();'
                  id='{id}__input'
                  class='form-control' />

          <div class='input-group-append'>
              <button type='button' class='btn btn-outline-secondary' id='{id}__remove' style='display: none;'>
                  <i class='fa fa-fw fa-times'></i>
              </button>
              <a href='#' target='_blank' class='btn btn-outline-secondary' id='{id}__view' style='display: none;'>
                  <i class='fa fa-fw fa-download'></i>
              </a>
          </div>
      </div>
      
      <img id='{id}__image'
        style='display: none; max-width: 200px; max-height: 150px;'
      />
  </div>
`

RegateImage.markup = id => {
  return RegateImage.getMarkup()
    .replace(/{id}/g, id)
}

RegateImage.setMarkup = markup =>
  RegateImage._markup = markup

RegateImage.getMarkup = () =>
  RegateImage._markup

export default RegateImage
