import { pick } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import FileInput from '../../FileInput';
import IconPlus from '../../Icons/Plus';
import Image from './Image';

const Cover = ({ images, onChange }) => (
  <div className={styles.cover}>
    <div className={styles.list}>
      {images.map((image, index) => (
        <div className={styles.item}>
          <div className={styles.content}>
            <Image
              {...image}
              index={index}
              onClickRemove={() => {
                const result = [].concat(images);
                result.splice(index, 1);
                onChange(result);
              }}
              onChangeIndex={(newIndex) => {
                const result = [].concat(images);
                [result[index], result[newIndex]] = [result[newIndex], result[index]];
                onChange(result);
              }}
            />
          </div>
        </div>
      ))}
      <div className={styles.item}>
        <div className={styles.content}>
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
        </div>
      </div>
    </div>
  </div>
);

Cover.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(pick(Image.propTypes, 'src', 'alt'))),
  onChange: PropTypes.func.isRequired,
};

Cover.defaultProps = {
  images: [],
};

export default Cover;
