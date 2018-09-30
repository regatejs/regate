'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var RegateKeyword = {};

RegateKeyword.init = function (_ref) {
    var id = _ref.id,
        name = _ref.name,
        _ref$keywords = _ref.keywords,
        keywords = _ref$keywords === undefined ? [] : _ref$keywords;


    if (id === undefined) throw new Error('id is required');

    var _input = document.getElementById(id + '__input');

    if (_input === undefined) throw new Error('id is invalid');

    _input.name = name;

    // this component depends on Vue
    if ((typeof Vue === 'undefined' ? 'undefined' : _typeof(Vue)) === (typeof undefined === 'undefined' ? 'undefined' : _typeof(undefined))) {
        console.log('please include Vuejs before using RegateKeyword');
        return false;
    }

    keywords = RegateKeyword.NormalizeKeywords(keywords);

    new Vue({
        el: '#' + id + '__app',
        data: {
            newTodoText: null,
            items: keywords
        },
        methods: {
            addNewTodo: function addNewTodo() {
                this.items.push(this.newTodoText);
                this.newTodoText = '';
            },
            deleteItem: function deleteItem(index) {
                this.items.splice(index, 1);
            },
            filterData: function filterData() {
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
            checkForm: function checkForm() {
                if (this.newTodoText) {
                    this.addNewTodo();
                    return true;
                }
            }
        }
    });
};

RegateKeyword.NormalizeKeywords = function (keywords) {
    return keywords ? Array.isArray(keywords) ? keywords : [keywords] : [];
};

RegateKeyword.markup = function (id) {
    return '\n  <div id=\'' + id + '__app\'>\n    <textarea\n      id=\'' + id + '__input\'\n      class=\'form-control\'\n      style=\'display: none\'\n    >{{filterData()}}</textarea>\n\n    <div>\n        <draggable :list="items" v-model="items">\n            <div v-for="(item, index) in items" style=\'margin: 2px 0;\'>\n                <div class="input-group">\n                    <div class="input-group-prepend">\n                        <span class="input-group-text">\n                            <i class="fa fa-fw fa-bars" style=\'opacity: 0.3;\'></i>\n                        </span>\n                        \n                    </div>\n                    \n                    <input class="form-control" type="text" v-model="items[index]" />\n\n                    <div class="input-group-append">\n                        <button type="button" class="btn btn-danger" v-on:click="deleteItem(index)">\n                            <i class="fa fa-fw fa-times"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </draggable>\n\n        <div class="input-group">\n            <div class="input-group-prepend" style=\'opacity: 0.5;\'>\n                <span class="input-group-text">\n                    <i class="fa fa-fw fa-bars" style=\'opacity: 0.3;\'></i>\n                </span>\n                \n            </div>\n            \n            <input class="form-control" type="text" v-model="newTodoText" v-on:keyup.enter="checkForm" />\n\n            <div class="input-group-append">\n                <button type="button" class="btn btn-success" v-on:click="checkForm">\n                    <i class="fa fa-fw fa-plus"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n  </div>\n';
};

exports.default = RegateKeyword;