
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

  getValue() {
    return this.value
  }

  init() {
    const _input = this.getInput()

    _input.name = name

    if (this.isRequired === true)
      _input.required = true

    if (this.value !== undefined)
      _input.value = value

    if (this.placeholder !== undefined)
      _input.placeholder = placeholder

    if (typeof this.onInitialized === typeof Function) {
      const isValid = this.isRequired
        ? this.value.length > 0
        : true

      onInitialized({ value: this.value, isValid })
    }

    if (typeof onChange === typeof Function) {
      _input.oninput = () => {
        const value = _input.value

        const isValid = this.isRequired
          ? value.length > 0
          : true

        onChange({ value, isValid })
      }
    }
  }

  setValue(value) {
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

RegateTextClass.getMarkup = () =>
  RegateTextClass._markup

RegateTextClass.setMarkup = markup => 
  RegateTextClass._markup = markup
