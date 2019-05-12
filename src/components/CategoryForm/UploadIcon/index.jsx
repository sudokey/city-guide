import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './styles.less';
import FileInput from '../../FileInput';
import IconRemove from '../../IconRemove';
import UplaodLabel from '../../UploadLabel';
import Api from '../../../libs/api';

const UploadIcon = ({ url, onUpload, onClickRemove }) => {
  const [loading, setLoading] = useState(false);

  return (
    // TODO: Remove blur on file change
    <FileInput
      title="Добавьте иконку"
      className={styles.uploadIcon}
      disabled={loading}
      inputProps={{
        multiple: false,
        accept: 'image/png, image/x-png',
        onChange: async (e) => {
          setLoading(true);
          try {
            // TODO: Add loader
            const resultUrl = await Api.uploadCategoryIcon(e.target.files[0]);
            onUpload({ url: resultUrl });
          } catch (err) {
            // TODO: Show notification
            console.error(err);
          }
          setLoading(false);
        },
      }}
    >
      {url ? (
        <>
          <span className={styles.remove}>
            <IconRemove
              size={44}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClickRemove();
              }}
            />
          </span>
          <img src={url} alt="" />
        </>
      ) : (
        <UplaodLabel>
          Добавьте
          <br />
          иконку
        </UplaodLabel>
      )}
    </FileInput>
  );
};

UploadIcon.propTypes = {
  url: PropTypes.string,
  onClickRemove: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
};

UploadIcon.defaultProps = {
  url: undefined,
};

export default UploadIcon;
