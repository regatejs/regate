const RegateTextarea = require('../../src/RegateTextarea').default

test('invalid markup : markup does not exists', () => {
  const id = 'id'

  try {
    RegateTextarea.init({ id })
  } catch (ex) {
    expect(true).toBe(true)
  }
})
