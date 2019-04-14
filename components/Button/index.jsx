import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';

const Button = ({ children, type, green }) => (
  <button
    type={type}
    className={classnames({
      [styles.button]: true,
      [styles.green]: green,
    })}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  green: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  green: false,
};

export default Button;
