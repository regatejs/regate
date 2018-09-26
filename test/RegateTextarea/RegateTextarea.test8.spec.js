const RegateTextarea = require('../../src/RegateTextarea').default

test('onInitialized : isValid for non required fields | empty field', done => {
  const id = 'id'

  document.body.innerHTML = RegateTextarea.markup(id)
  RegateTextarea.init({
    id,
    onInitialized: ({isValid}) => {
      expect(isValid).toBe(true)
      done()
    }
  })
})
