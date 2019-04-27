import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import IconCloseCircle from '../../../Icons/CloseCircle';

const Image = ({ src, alt }) => (
  <div className={styles.image}>
    <span className={styles.remove} title="Удалить">
      <IconCloseCircle />
    </span>
    <img src={src} alt={alt} />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
};

export default Image;
