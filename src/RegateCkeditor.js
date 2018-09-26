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
    _input.value = value

  ClassicEditor.create(_input)
}


RegateCkeditor.markup = (id) => `
  <textarea
    id='${id}__input'
    class='form-control'
  ></textarea>
`
export default RegateCkeditor
