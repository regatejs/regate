const RegateText = require('../../src/RegateText').default

test('onInitialized : isValid for non required fields | empty field', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    onInitialized: ({isValid}) => {
      expect(isValid).toBe(true)
      done()
    }
  })
})
