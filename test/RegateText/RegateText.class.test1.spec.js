const RegateTextClass = require('../../src/RegateText.class').default

test('basic', () => {
  const id = 'HELLO'

  const field = new RegateTextClass({
    id,
  })

  document.body.innerHTML = field.getMarkup()

  expect(field.id).toBe(id)
})

test('value', () => {
  const id = 'HELLO'
  const value = 'WORLD'

  const field = new RegateTextClass({
    id,
    value,
  })

  document.body.innerHTML = field.getMarkup()

  expect(field.getValue).toBe(value)
})
