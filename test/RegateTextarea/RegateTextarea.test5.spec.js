const RegateTextarea = require('../../src/RegateTextarea').default

test('isRequired', () => {
  const id = 'id'

  document.body.innerHTML = RegateTextarea.markup(id)
  RegateTextarea.init({ id, isRequired: true })
  
  const _input = document.getElementById(`${id}__input`)
  expect(_input.required).toBe(true)
})
