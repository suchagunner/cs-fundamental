import Component from '../core/Component.js';

export default class ItemProvider extends Component {
  setup() {
    this.$state = {
      keyword: '',
    };
  }

  template() {
    return `
    <form id="todo-form">
      <input value="${this.$state.keyword}" type="text" placeholder="아이템을 입력해주세요"/>
      <button type="submit">입력</button>
    </form>
    `;
  }

  setEvents() {
    const { append } = this.$props.actions;
    this.addListener('submit', '#todo-form', (e) => {
      e.preventDefault();
      append({
        id: `${+new Date()}`,
        content: this.$target.querySelector('input').value,
      });
    });
  }

  mounted() {}
}
