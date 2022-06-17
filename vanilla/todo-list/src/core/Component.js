export default class Component {
  $target;
  $state;
  $props;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.render();
  }

  setup() {}

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
    this.setEvents();
  }

  mounted() {}

  setEvents() {}

  setState(newState) {
    console.log('newState', newState);
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  template() {}

  addListener(eventName, selector, callback) {
    const children = Array.from(document.querySelectorAll(selector));
    const isTarget = (target) => children.includes(target) || target.closest(selector);

    this.$target.addEventListener(eventName, (evt) => {
      if (!isTarget) return;
      callback(evt);
    });
  }
}
