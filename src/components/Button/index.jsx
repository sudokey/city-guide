import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';

const Button = ({
  children, green, url, ...rest
}) => {
  const ButtonTag = url ? Link : 'button';

  return (
    <ButtonTag
      {...rest}
      className={classnames({
        [styles.button]: true,
        [styles.green]: green,
      })}
      to={url}
    >
      {children}
    </ButtonTag>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  green: PropTypes.bool,
  url: PropTypes.string,
};

Button.defaultProps = {
  type: undefined,
  green: false,
  url: undefined,
};

export default Button;
