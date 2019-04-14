import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import CloseIcon from '../Icons/Close';

const Tag = ({ title, onClickRemove }) => (
  <div
    className={classNames({
      [styles.tag]: true,
      [styles.withRemve]: !!onClickRemove,
    })}
  >
    {title}
    {onClickRemove && (
      <button
        title="Remove"
        className={styles.remove}
        onClick={onClickRemove}
      >
        <CloseIcon />
      </button>
    )}
  </div>
);

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func,
};

Tag.defaultProps = {
  onClickRemove: undefined,
};

export default Tag;
