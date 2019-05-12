import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import IconRemove from '../../../IconRemove';

const Image = ({ src, alt, onClickRemove }) => (
  <div className={styles.image}>
    <div className={styles.remove}>
      <IconRemove onClick={onClickRemove} />
    </div>
    <img src={src} alt={alt} />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClickRemove: PropTypes.func.isRequired,
};

Image.defaultProps = {
  alt: '',
};

export default Image;
