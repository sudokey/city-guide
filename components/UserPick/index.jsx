import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import IconUserPick from '../Icons/UserPick';

const UserPick = ({ src, alt, size }) => (
  <div
    className={styles.userPick}
    style={{
      width: size ? `${size}px` : undefined,
      height: size ? `${size}px` : undefined,
    }}
  >
    {src ? (
      <img src={src} alt={alt} />
    ) : (
      <IconUserPick title={alt} />
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
