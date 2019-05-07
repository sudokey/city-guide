import React from 'react';
import styles from './styles.less';

const TextInput = props => (
  <input
    {...props}
    className={styles.input}
  />
);

export default TextInput;
