const RegateText = require('../../src/RegateText').default

test('basic initialize', () => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({ id })
  
  const _input = document.getElementById(`${id}__input`)
  expect(_input.constructor.name).toBe('HTMLInputElement')
})
