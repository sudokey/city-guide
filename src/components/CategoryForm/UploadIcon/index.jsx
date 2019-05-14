import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import FileInput from '../../FileInput';
import IconRemove from '../../IconRemove';
import UplaodLabel from '../../UploadLabel';
import Api from '../../../libs/api';
import { useLoader } from '../../../libs/Loader';

const UploadIcon = ({
  url, disabled, onUpload, onClickRemove,
}) => {
  const [loading, setLoading] = useLoader();

  return (
    <FileInput
      title="Добавьте иконку"
      className={styles.uploadIcon}
      disabled={loading || disabled}
      inputProps={{
        multiple: false,
        accept: 'image/png, image/x-png',
        onChange: async (e) => {
          setLoading(true);
          try {
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
  disabled: PropTypes.bool,
  onClickRemove: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
};

UploadIcon.defaultProps = {
  url: undefined,
  disabled: false,
};

export default UploadIcon;
