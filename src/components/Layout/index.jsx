import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';

const Layout = ({ header, content }) => (
  <div className={styles.layout}>
    {header}
    <div className={styles.content}>
      {content}
    </div>
  </div>
);

Layout.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  header: undefined,
};

export default Layout;
