const RegateText = require('../../src/RegateText').default

test('isRequired', () => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({ id, isRequired: true })
  
  const _input = document.getElementById(`${id}__input`)
  expect(_input.required).toBe(true)
})
