const RegateText = require('../../src/RegateText').default

test('onInitialized : isValid for required fields | empty fields', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    isRequired: true,
    onInitialized: ({isValid}) => {
      expect(isValid).toBe(false)
      done()
    }
  })
})
