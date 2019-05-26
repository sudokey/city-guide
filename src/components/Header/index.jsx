import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';

const Header = ({ children }) => (
  <div className={styles.header}>
    <div className={styles.inner}>
      {children}
    </div>
  </div>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
export { default as Section } from './Section';
