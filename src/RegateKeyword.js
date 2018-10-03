const RegateKeyword = {}

RegateKeyword.init = function ({
  id,
  name,
  keywords = [],
}) {

  if (id === undefined)
    throw new Error('id is required')

  const _input = document.getElementById(id + '__input')

  if (_input === undefined)
    throw new Error('id is invalid')

  _input.name = name

  // this component depends on Vue
  if (typeof Vue === typeof undefined) {
    console.log('please include Vuejs before using RegateKeyword')
    return false
  }

  keywords = RegateKeyword.NormalizeKeywords(keywords)

  new Vue({
      el: `#${id}__app`,
      data: {
          newTodoText: '',
          items: keywords
      },
      methods: {
          addNewTodo: function () {
              this.items.push(this.newTodoText)
              this.newTodoText = ''
          },
          deleteItem: function (index) {
              this.items.splice(index, 1)
          },
          filterData: function () {
            return this.items.filter(item =>item.length > 0)
          },
          addItem: function () {
              if (this.newTodoText) {
                  this.addNewTodo()
              }
          }
      }
  })
}

RegateKeyword.NormalizeKeywords = keywords => {
  return keywords ? (Array.isArray(keywords) ? keywords : [keywords]) : []
}

RegateKeyword._markup = `
  <div id='{id}__app'>
    <textarea
      id='{id}__input'
      class='form-control'
      style='display: none'
    >{{filterData()}}</textarea>

    <div>
        <draggable :list="items" v-model="items" :options="{handle:'.handle'}">
            <div v-for="(item, index) in items" style='margin-bottom: 2px;'>
                <div class="input-group">
                    <div class="input-group-prepend handle">
                        <span class="input-group-text">
                            <i class="fa fa-fw fa-bars" style='opacity: 0.3;'></i>
                        </span>
                    </div>
                    
                    <input class="form-control"
                        type="text"
                        v-model="items[index]"
                        v-on:keydown.enter.prevent
                    />

                    <div class="input-group-append">
                        <button type="button" class="btn btn-danger" v-on:click="deleteItem(index)">
                            <i class="fa fa-fw fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        </draggable>

        <div class="input-group">
            <div class="input-group-prepend" style='opacity: 0.5;'>
                <span class="input-group-text">
                    <i class="fa fa-fw fa-bars" style='opacity: 0.3;'></i>
                </span>
                
            </div>
            
            <input class="form-control"
                type="text"
                v-model="newTodoText"
                v-on:keyup.enter="addItem"
                v-on:keydown.enter.prevent
            />

            <div class="input-group-append">
                <button type="button" class="btn btn-success" v-on:click="addItem">
                    <i class="fa fa-fw fa-plus"></i>
                </button>
            </div>
        </div>
    </div>
  </div>
`

RegateKeyword.markup = id => {
  return RegateKeyword.getMarkup()
    .replace(/{id}/g, id)
}

RegateKeyword.setMarkup = markup =>
  RegateKeyword._markup = markup

RegateKeyword.getMarkup = () =>
  RegateKeyword._markup

export default RegateKeyword
