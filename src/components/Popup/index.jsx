import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.less';
import appStyles from '../App/styles.less';

const appRoot = document.getElementById('app-root');
const popupRoot = document.getElementById('popup-root');

// TODO: Add esc key to close popup
class Popup extends PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = styles.popup;
  }

  componentDidMount() {
    const { onClickClose, dark } = this.props;

    popupRoot.appendChild(this.el);
    appRoot.style.top = `-${window.pageYOffset}px`;
    appRoot.classList.add(appStyles.fixed, appStyles.blur);
    if (dark) {
      appRoot.classList.add(appStyles.dark);
    }
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.el.classList.add(styles.active);
    }, 0);

    this.el.addEventListener('click', (e) => {
      if (onClickClose && e.target === this.el) {
        onClickClose();
      }
    });
  }

  componentWillUnmount() {
    this.el.classList.remove(styles.active);
    appRoot.classList.remove(appStyles.blur);

    setTimeout(() => {
      popupRoot.removeChild(this.el);
      appRoot.classList.remove(appStyles.fixed, appStyles.dark);
      window.scrollTo(0, Math.abs(Number.parseInt(appRoot.style.top, 10)));
    }, 200);
  }

  render() {
    const { children } = this.props;

    return createPortal(children, this.el);
  }
}

Popup.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClickClose: PropTypes.func,
};

Popup.defaultProps = {
  dark: false,
  onClickClose: undefined,
};

export default Popup;
export { default as Content } from './Content';
