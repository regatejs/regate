const RegateText = require('../src/RegateText').default

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

test('onInitialized', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    value: 'Hello World',
    isRequired: true,
    onInitialized: ({value}) => {
      expect(value).toBe('Hello World')
      done()
    }
  })
})

test('onChange', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    isRequired: true,
    onChange: ({value}) => {
      expect(value).toBe('Hello World')
      done()
    }
  })
  
  const _input = document.getElementById(`${id}__input`)
  _input.value = 'Hello World'
  _input.oninput()
})

test('onInitialized : isValid for non required fields | empty field', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    onInitialized: ({isValid}) => {
      expect(isValid).toBe(true)
      done()
    }
  })
})

test('onInitialized : isValid for non required fields | non empty field', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    value: 'Hello World',
    onInitialized: ({isValid}) => {
      expect(isValid).toBe(true)
      done()
    }
  })
})

test('onInitialized : isValid for required fields | empty fields', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    isRequired: true,
    onInitialized: ({isValid}) => {
      expect(isValid).toBe(false)
      done()
    }
  })
})

test('onInitialized : isValid for required fields | non empty fields', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    isRequired: true,
    value: 'Hello World',
    onInitialized: ({isValid}) => {
      expect(isValid).toBe(true)
      done()
    }
  })
})

test('onChange : isValid for required fields when default value is getting empty', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    value: 'Hello World',
    isRequired: true,
    value: 'Hello World',
    onChange: ({isValid}) => {
      expect(isValid).toBe(false)
      done()
    }
  })

  const _input = document.getElementById(`${id}__input`)
  _input.value = ''
  _input.oninput()
})

test('onChange : isValid for required fields when default value is getting typed', done => {
  const id = 'id'

  document.body.innerHTML = RegateText.markup(id)
  RegateText.init({
    id,
    value: 'Hello World',
    isRequired: true,
    onChange: ({isValid}) => {
      expect(isValid).toBe(true)
      done()
    }
  })

  const _input = document.getElementById(`${id}__input`)
  _input.value = 'Hello World'
  _input.oninput()
})