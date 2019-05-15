import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';

const Button = ({
  children, url, ...rest
}) => {
  const ButtonTag = url ? Link : 'button';

  return (
    <ButtonTag
      {...rest}
      className={classnames({
        [styles.button]: true,
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
  url: PropTypes.string,
};

Button.defaultProps = {
  type: undefined,
  url: undefined,
};

export default Button;
