import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import FileInput from '../../FileInput';
import IconPlus from '../../Icons/Plus';
import Item from './Item';
import Image from './Image';

const Cover = ({ images, onChange }) => (
  <div className={styles.cover}>
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
          title="Добавить изображение"
          className={styles.fileInput}
          inputProps={{
            multiple: true,
            accept: 'image/x-png,image/gif,image/jpeg',
            onChange: (e) => {
              const addedImages = Array.from(e.target.files).map(file => ({
                src: URL.createObjectURL(file),
              }));
              onChange(images.concat(addedImages));
            },
          }}
        >
          <span className={styles.icon}>
            <IconPlus />
          </span>
          <span className={styles.label}>
            Добавьте
            <br />
            фотографии
          </span>
        </FileInput>
      </Item>
    </div>
  </div>
);

Cover.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(Image.propTypes)),
  onChange: PropTypes.func.isRequired,
};

Cover.defaultProps = {
  images: [],
};

export default Cover;
