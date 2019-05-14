import shortid from 'shortid';
import { useState, useEffect } from 'react';
import styles from './styles.less';

export default class Loader {
  constructor() {
    this.ids = [];
    this.el = document.createElement('div');
    this.progressEl = document.createElement('div');
    this.el.className = styles.loader;
    this.progressEl.className = styles.progress;
    this.el.appendChild(this.progressEl);
    document.body.appendChild(this.el);
  }

  start() {
    const id = shortid.generate();
    this.ids.push(id);
    this.el.classList.add(styles.start);

    return id;
  }

  done(ids) {
    this.ids = this.ids.filter(i => ids.indexOf(i) === -1);

    if (!this.ids.length) {
      this.el.classList.add(styles.done);

      setTimeout(() => {
        this.el.classList.remove(styles.start, styles.done);
      }, 700);
    }
  }
}

export const loader = new Loader();

export const useLoader = (initialValue) => {
  const [loading, setLoading] = useState(!!initialValue);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    if (loading) {
      setIds(ids.concat(loader.start()));
    } else if (ids.length) {
      loader.done(ids);
      setIds([]);
    }
  }, [loading]);

  return [loading, setLoading];
};
