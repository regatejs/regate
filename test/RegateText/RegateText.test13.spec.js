const RegateText = require('../../src/RegateText').default

test('onChange : isValid for required fields when default value is getting typed', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    isRequired: true,
    onChange: ({isValid}) => {
      expect(isValid).toBe(true)
      done()
    }
  })

  const _input = document.getElementById(`${id}__input`)
  _input.value = 'Hello World'
  _input.oninput()
})