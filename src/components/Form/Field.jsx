import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './styles.less';

const Field = ({ children, submited, error }) => {
  const [field, setField] = useState({
    dirty: false,
  });

  return (
    <div className={styles.field}>
      {typeof children === 'function' ? children({
        ...field,
        setDirty: (dirty) => {
          setField({ ...field, dirty });
        },
      }) : children}
      {(field.dirty || submited) && error && (
        <div className={styles.error}>{error}</div>
      )}
    </div>
  );
};

Field.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  submited: PropTypes.bool,
  error: PropTypes.string,
};

Field.defaultProps = {
  submited: false,
  error: '',
};

export default Field;
