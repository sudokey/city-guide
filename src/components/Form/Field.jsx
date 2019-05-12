import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';

const Field = ({ children }) => (
  <div className={styles.field}>
    {children}
  </div>
);

Field.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Field;
