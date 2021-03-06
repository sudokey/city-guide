import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
export { default as Content } from './Content';
