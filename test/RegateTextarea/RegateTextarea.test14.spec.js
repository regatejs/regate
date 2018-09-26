const RegateTextarea = require('../../src/RegateTextarea').default

test('size', () => {
  const id = 'id'

  document.body.innerHTML = RegateTextarea.markup(id)

  RegateTextarea.init({
    id,
    size: RegateTextarea.Size.Large
  })

  const _input = document.getElementById(`${id}__input`)
  const size = _input.style.height
  expect(size).toBe(RegateTextarea.Size.Large + 'px')
})