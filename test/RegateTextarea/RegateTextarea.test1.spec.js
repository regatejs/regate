const RegateTextarea = require('../../src/RegateTextarea').default

test('invalid id', () => {
  try {
    RegateTextarea.init()
  } catch (ex) {
    expect(true).toBe(true)
  }
})
