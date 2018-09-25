const RegateText = require('../../src/RegateText').default

test('onInitialized : isValid for required fields | non empty fields', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    isRequired: true,
    value: 'Hello World',
    onInitialized: ({isValid}) => {
      expect(isValid).toBe(true)
      done()
    }
  })
})
