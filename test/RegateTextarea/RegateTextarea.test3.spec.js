const RegateTextarea = require('../../src/RegateTextarea').default

test('basic initialize', () => {
  const id = 'id'

  document.body.innerHTML = RegateTextarea.markup(id)
  RegateTextarea.init({ id })
  
  const _input = document.getElementById(`${id}__input`)
  expect(_input.constructor.name).toBe('HTMLTextAreaElement')
})
