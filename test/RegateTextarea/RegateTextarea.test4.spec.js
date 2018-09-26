const RegateTextarea = require('../../src/RegateTextarea').default

test('default value', () => {
  const id = 'id'

  document.body.innerHTML = RegateTextarea.markup(id)
  RegateTextarea.init({ id, value: 'Hello World' })
  
  const _input = document.getElementById(`${id}__input`)
  expect(_input.value).toBe('Hello World')
})
