
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

  getMarkup() {
    return RegateTextClass.getMarkup()
      .replace(/{id}/g, this.id)
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