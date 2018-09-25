const RegateText = require('../../src/RegateText').default

test('onInitialized', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    value: 'Hello World',
    isRequired: true,
    onInitialized: ({value}) => {
      expect(value).toBe('Hello World')
      done()
    }
  })
})
