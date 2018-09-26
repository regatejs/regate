const RegateTextarea = require('../../src/RegateTextarea').default

test('onInitialized : isValid for required fields | non empty fields', done => {
  const id = 'id'

  document.body.innerHTML = RegateTextarea.markup(id)
  RegateTextarea.init({
    id,
    isRequired: true,
    value: 'Hello World',
    onInitialized: ({isValid}) => {
      expect(isValid).toBe(true)
      done()
    }
  })
})
