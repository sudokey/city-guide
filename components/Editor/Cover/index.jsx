import arrayMove from 'array-move';
import { pick } from 'lodash';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import FileInput from '../../FileInput';
import IconPlus from '../../Icons/Plus';
import Image from './Image';

// TODO: Transition on remove and add images
// TODO: Fix responsive
const Cover = ({ images, onChange }) => {
  const SortableImageItem = SortableElement(({ image, index }) => (
    <div className={styles.item}>
      <div className={styles.content}>
        <Image
          {...image}
          onClickRemove={() => {
            const result = [].concat(images);
            result.splice(index, 1);
            onChange(result);
          }}
        />
      </div>
    </div>
  ));

  const SortableImageList = SortableContainer(({ list }) => (
    <div className={styles.list}>
      {list.map((image, index) => (
        <SortableImageItem
          key={index}
          index={index}
          image={image}
        />
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
                const result = images.concat(addedImages);
                onChange(result);
              },
            }}
          >
            <IconPlus />
            Добавьте
            <br />
            фотографии
          </FileInput>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={styles.cover}>
      <SortableImageList
        axis="xy"
        list={images}
        shouldCancelStart={e => e.target.tagName === 'BUTTON'}
        onSortEnd={({ oldIndex, newIndex }) => {
          const result = arrayMove(images, oldIndex, newIndex);
          onChange(result);
        }}
      />
    </div>
  );
};

Cover.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(pick(Image.propTypes, 'src', 'alt'))),
  onChange: PropTypes.func.isRequired,
};

Cover.defaultProps = {
  images: [],
};

export default Cover;
