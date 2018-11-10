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

console.log(RegateTextClass)

test('invalid id', () => {
  const id = 'HELLO'
  const field = new RegateTextClass({
    id,
  })

  console.log(field.getMarkup())

  expect(field.id).toBe(id)
})
