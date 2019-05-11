import styles from './styles.less';

export default class Loader {
  constructor() {
    this.queue = 0;
    this.el = document.createElement('div');
    this.progressEl = document.createElement('div');
    this.el.className = styles.loader;
    this.progressEl.className = styles.progress;
    this.el.appendChild(this.progressEl);
    document.body.appendChild(this.el);
  }

  start() {
    this.queue = this.queue + 1;
    this.el.classList.add(styles.start);
  }

  done() {
    if (this.queue > 0) {
      this.queue = this.queue - 1;
    }

    if (this.queue === 0) {
      this.el.classList.add(styles.done);

      setTimeout(() => {
        this.el.classList.remove(styles.start, styles.done);
      }, 700);
    }
  }
}

export const loader = new Loader();
