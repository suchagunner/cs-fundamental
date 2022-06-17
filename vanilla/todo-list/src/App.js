import Component from './core/Component.js';
import ItemProvider from './components/ItemProvider.js';
import ItemList from './components/ItemList.js';

export default class App extends Component {
  setup() {
    this.$state = {
      items: [],
      keyword: '',
    };
  }

  template() {
    return `
    <div id="todo-app" class="todo-app">
      <div id="todo-provider" class="todo-app__item-provider">
      </div>
      <div id="todo-list" class="todo-app__item-provider">
      </div>
    </div>
    `;
  }

  mounted() {
    const $todoProvider = document.querySelector('#todo-provider');
    const $todoList = document.querySelector('#todo-list');

    const TodoProvider = new ItemProvider($todoProvider, {
      state: this.$state,
      actions: {
        append: this.actions().append.bind(this),
      },
    });
    const TodoList = new ItemList($todoList, {
      state: this.$state,
      actions: {
        remove: this.actions().remove.bind(this),
      },
    });
  }

  actions() {
    return {
      remove: (id) => {
        this.setState({ items: this.$state.items.filter((o) => o.id !== id) });
      },
      append: (item) => {
        this.setState({ items: [item, ...this.$state.items] });
      },
    };
  }
}
