import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';

const Section = ({ children }) => (
  <div className={styles.section}>
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
