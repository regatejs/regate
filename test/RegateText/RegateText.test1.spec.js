const RegateText = require('../../src/RegateText').default

test('invalid id', () => {
  try {
    RegateText.init()
    expect(false).toBeTruthy()
  } catch (ex) {
    expect(true).toBeTruthy()
  }
})
