const RegateText = require('../../src/RegateText').default

test('onChange', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
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
