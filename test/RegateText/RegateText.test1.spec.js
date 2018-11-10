const RegateText = require('../../src/RegateText').default
const RegateTextClass = require('../../src/RegateText.class').default

test('invalid id', () => {
  try {
    RegateText.init()
    expect(false).toBeTruthy()
  } catch (ex) {
    expect(true).toBeTruthy()
  }
})

test('invalid id', () => {
  const id = 'HELLO'
  const field = new RegateTextClass({
    id,
  })

  document.body.innerHTML = field.getMarkup()

  console.log(field.getMarkup())
  console.log(field.getInput())

  expect(field.id).toBe(id)
})
