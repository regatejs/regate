const RegateText = require('../src/RegateText').default

function sum(a, b) {
  return a + b
}


test('invalid id', () => {
  try {
    RegateText.init()
    expect(false).toBeTruthy()
  } catch (ex) {
    expect(true).toBeTruthy()
  }
})

test('invalid markup : markup does not exists', () => {
  const id = 'id'

  try {
    RegateText.init({ id })
    expect(false).toBeTruthy()
  } catch (ex) {
    expect(true).toBeTruthy()
  }
})

test('basic initialize', () => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({ id })
  
  const _input = document.getElementById(`${id}__input`)
  expect(_input.constructor.name).toBe('HTMLInputElement')
})

test('default value', () => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({ id, value: 'Hello World' })
  
  const _input = document.getElementById(`${id}__input`)
  expect(_input.value).toBe('Hello World')
})

test('isRequired', () => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({ id, isRequired: true })
  
  const _input = document.getElementById(`${id}__input`)
  expect(_input.required).toBe(true)
})