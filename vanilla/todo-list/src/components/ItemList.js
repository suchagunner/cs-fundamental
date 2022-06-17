import Component from '../core/Component.js';

export default class ItemList extends Component {
  template() {
    const { items } = this.$props.state;

    return `
      <ul>
        ${items
          .map(
            ({ id, content }) => `
          <li data-id="${id}">
            ${content}
            <button class="btn btn--delete">삭제</button>
          </li>
        `
          )
          .join('')}
      </ul>
    
    `;
  }

  setEvents() {
    const { remove } = this.$props.actions;
    this.addListener('click', '.btn--delete', (e) => {
      const targetId = e.target.closest('[data-id]').dataset.id;
      remove(targetId);
    });
  }

  mounted() {}
}
