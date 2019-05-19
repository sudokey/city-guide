import React from 'react';
import styles from './styles.less';
import IconPlus from '../../Icons/Plus';

const Add = ({ ...rest }) => (
  <button
    {...rest}
    className={styles.add}
    title="Добавить"
  >
    <IconPlus />
  </button>
);

export default Add;
