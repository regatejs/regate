const RegateText = require('../../src/RegateText').default

test('onInitialized : isValid for non required fields | non empty field', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    value: 'Hello World',
    onInitialized: ({isValid}) => {
      expect(isValid).toBe(true)
      done()
    }
  })
})
