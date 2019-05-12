import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import IconClose from '../Icons/Close';

const Tag = ({
  name, url, iconSvg, iconUrl, blue, blueDark, onClickRemove,
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
        {iconSvg && (
          <span className={styles.icon}>
            {iconSvg}
          </span>
        )}
        {iconUrl && (
          <span className={styles.icon}>
            <img src={iconUrl} alt="" />
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
  iconSvg: PropTypes.node,
  iconUrl: PropTypes.string,
  url: PropTypes.string,
  blue: PropTypes.bool,
  blueDark: PropTypes.bool,
  onClickRemove: PropTypes.func,
};

Tag.defaultProps = {
  url: undefined,
  iconSvg: undefined,
  iconUrl: undefined,
  blue: false,
  blueDark: false,
  onClickRemove: undefined,
};

export default Tag;
