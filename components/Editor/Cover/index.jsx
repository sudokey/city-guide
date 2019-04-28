import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import FileInput from '../../FileInput';
import IconImage from '../../Icons/Image';
import IconPlus from '../../Icons/Plus';
import Item from './Item';
import Image from './Image';

const Cover = ({ images, onChange }) => {
  const fileInputInputOptions = {
    multiple: true,
    accept: 'image/x-png,image/gif,image/jpeg',
    onChange: (e) => {
      const addedImages = Array.from(e.target.files).map(file => ({
        src: URL.createObjectURL(file),
      }));
      onChange(images.concat(addedImages));
    },
  };

  return (
    <div className={styles.cover}>
      {images.length === 0 ? (
        <div className={styles.input}>
          <FileInput inputProps={fileInputInputOptions}>
            <span className={styles.label}>
              <IconImage />
              Добавьте красивую обложку
            </span>
          </FileInput>
        </div>
      ) : (
        <div className={styles.images}>
          {images.map((image, index) => (
            <Item key={index}>
              <Image
                {...image}
                onClickRemove={() => {
                  const result = [].concat(images);
                  result.splice(index, 1);
                  onChange(result);
                }}
              />
            </Item>
          ))}
          <Item>
            <FileInput
              theme={{ fileInput: styles.fileInput }}
              inputProps={fileInputInputOptions}
            >
              <IconPlus />
            </FileInput>
          </Item>
        </div>
      )}
    </div>
  );
};

Cover.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(Image.propTypes)),
  onChange: PropTypes.func.isRequired,
};

Cover.defaultProps = {
  images: [],
};

export default Cover;
