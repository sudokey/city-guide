import PropTypes from 'prop-types';
import React from 'react';
import IconCloseCircle from '../Icons/CloseCircle';
import styles from './styles.less';

const IconRemove = ({ size, title, ...rest }) => (
  <span
    {...rest}
    role="presentation"
    tabIndex="-1"
    title={title}
    className={styles.iconRemove}
    style={{
      width: `${size}px`,
      height: `${size}px`,
    }}
  >
    <IconCloseCircle />
  </span>
);

IconRemove.propTypes = {
  size: PropTypes.number,
  title: PropTypes.string,
};

IconRemove.defaultProps = {
  size: 64,
  title: 'Удалить',
};

export default IconRemove;
