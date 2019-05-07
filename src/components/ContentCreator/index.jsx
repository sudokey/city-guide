import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';

const ContentCreator = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.shadows}>
      <span className={`${styles.corner} ${styles.left}`} />
      <span className={`${styles.corner} ${styles.right}`} />
      <span className={styles.top} />
    </div>
    <div className={styles.inner}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </div>
);

ContentCreator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentCreator;
