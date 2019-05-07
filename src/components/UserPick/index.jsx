import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import IconUserPick from '../Icons/UserPick';

// TODO: Add lint tag
const UserPick = ({ src, alt, size }) => (
  <div
    title={alt}
    className={styles.userPick}
    style={{
      width: size ? `${size}px` : undefined,
      height: size ? `${size}px` : undefined,
    }}
  >
    {src ? (
      <img src={src} alt={alt} />
    ) : (
      <IconUserPick />
    )}
  </div>
);

UserPick.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.number,
};

UserPick.defaultProps = {
  src: undefined,
  alt: undefined,
  size: 30,
};

export default UserPick;
