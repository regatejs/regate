const RegateCkeditor = {}

RegateCkeditor.init = function ({
  id,
  name,
  value = '',
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _input = document.getElementById(id + '__input')

  if (_input === undefined)
    throw new Error('id is invalid')

  _input.name = name

  // this component depends on Ckeditor 5
  if (typeof ClassicEditor === typeof undefined) {
    console.log('please include Ckeditor 5 before using RegateCkeditor')
    return false
  }

  if (value !== undefined)
    _input.value = RegateCkeditor.DecodeEntities(value)

  ClassicEditor.create(_input)
}

RegateCkeditor.DecodeEntities = encodedString => {
  var textArea = document.createElement('textarea')
  textArea.innerHTML = encodedString
  return textArea.value
}

RegateCkeditor._markup = `
  <textarea
    id='{id}__input'
    class='form-control'
  ></textarea>
`

RegateCkeditor.markup = id => {
  return RegateCkeditor.getMarkup()
    .replace(/{id}/g, id)
}

RegateCkeditor.setMarkup = markup =>
  RegateCkeditor._markup = markup

RegateCkeditor.getMarkup = () =>
  RegateCkeditor._markup

export default RegateCkeditor
