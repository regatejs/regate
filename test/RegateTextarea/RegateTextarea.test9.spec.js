const RegateTextarea = require('../../src/RegateTextarea').default

test('onInitialized : isValid for non required fields | non empty field', done => {
  const id = 'id'

  document.body.innerHTML = RegateTextarea.markup(id)
  RegateTextarea.init({
    id,
    value: 'Hello World',
    onInitialized: ({isValid}) => {
      expect(isValid).toBe(true)
      done()
    }
  })
})
