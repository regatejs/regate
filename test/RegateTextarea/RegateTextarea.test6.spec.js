const RegateTextarea = require('../../src/RegateTextarea').default

test('onInitialized', done => {
  const id = 'id'

  document.body.innerHTML = RegateTextarea.markup(id)
  RegateTextarea.init({
    id,
    value: 'Hello World',
    isRequired: true,
    onInitialized: ({value}) => {
      expect(value).toBe('Hello World')
      done()
    }
  })
})
