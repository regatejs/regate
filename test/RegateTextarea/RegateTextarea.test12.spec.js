const RegateTextarea = require('../../src/RegateTextarea').default

test('onChange : isValid for required fields when default value is getting empty', done => {
  const id = 'id'

  document.body.innerHTML = RegateTextarea.markup(id)
  RegateTextarea.init({
    id,
    value: 'Hello World',
    isRequired: true,
    value: 'Hello World',
    onChange: ({isValid}) => {
      expect(isValid).toBe(false)
      done()
    }
  })

  const _input = document.getElementById(`${id}__input`)
  _input.value = ''
  _input.oninput()
})
