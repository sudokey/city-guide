import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';

const Item = ({ children }) => (
  <div className={styles.item}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Item;
