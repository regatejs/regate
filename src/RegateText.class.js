
export default class RegateTextClass {
  constructor({
    id,
    name,
    value = '',
    isRequired = false,
    placeholder = '',
    onInitialized,
    onChange,
  }) {
    this.id = id
    this.name = name
    this.value = value
    this.isRequired = isRequired
    this.placeholder = placeholder
    this.onInitialized = onInitialized
    this.onChange = onChange
  }

  getInput() {
    if (this._input !== undefined)
      return this._input

    this._input = document.getElementById(this.id + '__input')
    return this._input
  }

  getMarkup() {
    return RegateTextClass.getMarkup()
      .replace(/{id}/g, this.id)
  }

  init() {
    const _input = this.getInput()

    _input.name = name

    if (isRequired === true)
      _input.required = true

    if (value !== undefined)
      _input.value = value

    if (placeholder !== undefined)
      _input.placeholder = placeholder

    if (typeof onInitialized === typeof Function) {
      const isValid = isRequired
        ? value.length > 0
        : true

      onInitialized({ value, isValid })
    }

    if (typeof onChange === typeof Function) {
      _input.oninput = () => {
        const value = _input.value

        const isValid = isRequired
          ? value.length > 0
          : true

        onChange({ value, isValid })
      }
    }
  }

  update(value) {
    const _input = this.getInput()
    this.value = value
    _input.value = value
  }
}

RegateTextClass._markup = `
  <input
    id='{id}__input'
    type='text'
    class='form-control'
  />
`

RegateTextClass.getMarkup = () => {
  return RegateTextClass._markup
}