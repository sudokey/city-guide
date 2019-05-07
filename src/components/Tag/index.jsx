import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import IconClose from '../Icons/Close';

const Tag = ({
  name, blue, blueDark, icon, onClickRemove, url,
}) => {
  const TagComponent = url ? Link : 'div';

  return (
    <TagComponent
      className={classNames({
        [styles.tag]: true,
        [styles.blue]: blue,
        [styles.blueDark]: blueDark,
        [styles.withRemve]: !!onClickRemove,
      })}
      to={url || undefined}
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
    </TagComponent>
  );
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node,
  url: PropTypes.string,
  blue: PropTypes.bool,
  blueDark: PropTypes.bool,
  onClickRemove: PropTypes.func,
};

Tag.defaultProps = {
  url: undefined,
  icon: undefined,
  blue: false,
  blueDark: false,
  onClickRemove: undefined,
};

export default Tag;
