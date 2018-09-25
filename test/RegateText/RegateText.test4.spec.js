const RegateText = require('../../src/RegateText').default

test('default value', () => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({ id, value: 'Hello World' })
  
  const _input = document.getElementById(`${id}__input`)
  expect(_input.value).toBe('Hello World')
})
