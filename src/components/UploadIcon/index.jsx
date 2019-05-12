import React from 'react';
import styles from './styles.less';
import FileInput from '../FileInput';
import IconRemove from '../IconRemove';
import IconPlus from '../Icons/Plus';

const UploadIcon = () => (
  <FileInput className={styles.uploadIcon}>
    {false ? (
      <>
        <span className={styles.remove}>
          <IconRemove
            size={44}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          />
        </span>
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/198/grinning-face_1f600.png" alt="" />
      </>
    ) : (
      <span className={styles.label}>
        <IconPlus />
        Добавьте
        <br />
        иконку
      </span>
    )}
  </FileInput>
);

export default UploadIcon;
