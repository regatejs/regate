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
          newTodoText: null,
          items: keywords
      },
      methods: {
          addNewTodo: function () {

              this.items.push(this.newTodoText);
              this.newTodoText = '';
          },
          deleteItem: function (index) {
              this.items.splice(index, 1);
          },
          filterData: function () {
              var filterItems = [];
              var lmn = 0;
              for (var i = 0; i < this.items.length; i++) {
                  if (this.items[i] !== "") {
                      filterItems[lmn] = this.items[i];
                      lmn++;
                  }
              }
              return filterItems;
          },
          checkForm: function () {
              if (this.newTodoText) {
                  this.addNewTodo();
                  return true;
              }
          }
      }
  })
}

RegateKeyword.NormalizeKeywords = keywords => {
  return keywords ? (Array.isArray(keywords) ? keywords : [keywords]) : []
}

RegateKeyword.markup = (id) => `
  <div id='${id}__app'>
    <textarea
      id='${id}__input'
      class='form-control'
    >{{filterData()}}</textarea>

    <ul class="list-entered p-0">
        <draggable :list="items" v-model="items">
            <li v-for="(item, index) in items" class="list-item">
                <a class="list-item--move ml-2"><i class="fas fa-bars"></i></a>
                <input class="form-control list-item--input" type="text" dir="rtl" v-model="items[index]" />
                <a class="list-item--action red mr-2" v-on:click="deleteItem(index)"><i class="fas fa-times-circle"></i></a>
            </li>
        </draggable>
    </ul>

    <div class="input-add">
        <input class="form-control" type="text" dir="rtl" v-model="newTodoText" v-on:keyup.enter="checkForm" placeholder="محتوا را وارد نمایید" />
        <a class="list-item--action green mr-2" v-on:click="checkForm"><i class="fas fa-plus-circle"></i></a>
    </div>
  </div>
`

export default RegateKeyword
