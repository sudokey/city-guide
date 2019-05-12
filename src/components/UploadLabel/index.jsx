import PropTypes from 'prop-types';
import React from 'react';
import IconPlus from '../Icons/Plus';
import styles from './styles.less';

const UploadLabel = ({ children }) => (
  <span className={styles.uploadLabel}>
    <IconPlus />
    {children}
  </span>
);

UploadLabel.propTypes = {
  children: PropTypes.node,
};

UploadLabel.defaultProps = {
  children: undefined,
};

export default UploadLabel;
