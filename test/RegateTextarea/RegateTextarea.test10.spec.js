const RegateTextarea = require('../../src/RegateTextarea').default

test('onInitialized : isValid for required fields | empty fields', done => {
  const id = 'id'

  document.body.innerHTML = RegateTextarea.markup(id)
  RegateTextarea.init({
    id,
    isRequired: true,
    onInitialized: ({isValid}) => {
      expect(isValid).toBe(false)
      done()
    }
  })
})
