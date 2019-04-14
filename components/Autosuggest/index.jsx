import React from 'react';
import Autosuggest from 'react-autosuggest';
import styles from './styles.less';

export default props => (
  <Autosuggest
    theme={styles}
    {...props}
  />
);
