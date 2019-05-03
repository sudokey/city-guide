import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import IconClose from '../Icons/Close';

const Tag = ({
  name, blue, icon, onClickRemove,
}) => (
  <div
    className={classNames({
      [styles.tag]: true,
      [styles.blue]: blue,
      [styles.withRemve]: !!onClickRemove,
    })}
  >
    <span className={styles.inner}>
      {icon && (
        <span className={styles.icon}>
          {icon}
        </span>
      )}
      {name}
      {onClickRemove && (
        <button
          title="Remove"
          className={styles.remove}
          onClick={onClickRemove}
        >
          <IconClose />
        </button>
      )}
    </span>
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  blue: PropTypes.bool,
  icon: PropTypes.node,
  onClickRemove: PropTypes.func,
};

Tag.defaultProps = {
  icon: undefined,
  blue: false,
  onClickRemove: undefined,
};

export default Tag;
