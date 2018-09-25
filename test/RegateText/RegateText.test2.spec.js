const RegateText = require('../../src/RegateText').default

test('invalid markup : markup does not exists', () => {
  const id = 'id'

  try {
    RegateText.init({ id })
    expect(false).toBeTruthy()
  } catch (ex) {
    expect(true).toBeTruthy()
  }
})
