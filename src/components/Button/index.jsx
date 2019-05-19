import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';

const Button = ({
  children, to, strech, ...rest
}) => {
  const ButtonTag = to ? Link : 'button';

  return (
    <ButtonTag
      {...rest}
      className={classnames({
        [styles.button]: true,
        [styles.strech]: strech,
      })}
      to={to}
    >
      {children}
    </ButtonTag>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  to: PropTypes.string,
  strech: PropTypes.bool,
};

Button.defaultProps = {
  type: undefined,
  to: undefined,
  strech: false,
};

export default Button;
