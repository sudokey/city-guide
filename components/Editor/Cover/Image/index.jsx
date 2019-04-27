import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import IconCloseCircle from '../../../Icons/CloseCircle';

const Image = ({ src, alt, onClickRemove }) => (
  <div className={styles.image}>
    <button
      tabIndex="-1"
      type="button"
      className={styles.remove}
      title="Удалить"
      onClick={onClickRemove}
    >
      <IconCloseCircle />
    </button>
    <img src={src} alt={alt} />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClickRemove: PropTypes.func,
};

Image.defaultProps = {
  alt: '',
  onClickRemove: undefined,
};

export default Image;
