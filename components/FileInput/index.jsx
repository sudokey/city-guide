import React, { useRef } from 'react';
import IconImage from '../Icons/Image';
import styles from './styles.less';

const FileInput = () => {
  const labelRef = useRef(null);

  return (
    <div className={styles.input}>
      <button
        type="button"
        className={styles.labelWrapper}
        onClick={() => {
          labelRef.current.click();
        }}
      >
        <label htmlFor="file" className={styles.label} ref={labelRef}>
          <IconImage />
          Добавьте красивую обложку
          <input type="file" id="file" />
        </label>
      </button>
    </div>
  );
};

export default FileInput;
