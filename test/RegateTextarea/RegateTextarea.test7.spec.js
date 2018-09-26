const RegateTextarea = require('../../src/RegateTextarea').default

test('onChange', done => {
  const id = 'id'

  document.body.innerHTML = RegateTextarea.markup(id)
  RegateTextarea.init({
    id,
    isRequired: true,
    onChange: ({value}) => {
      expect(value).toBe('Hello World')
      done()
    }
  })
  
  const _input = document.getElementById(`${id}__input`)
  _input.value = 'Hello World'
  _input.oninput()
})
