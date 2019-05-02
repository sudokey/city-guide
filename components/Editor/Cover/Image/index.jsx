import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './styles.less';
import IconCloseCircle from '../../../Icons/CloseCircle';

const Image = ({
  src, alt, index, onClickRemove, onChangeIndex,
}) => {
  const [dragStart, setDragStart] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  return (
    <div
      draggable
      className={classNames({
        [styles.image]: true,
        [styles.dragStart]: dragStart,
        [styles.dragActive]: dragActive,
      })}
      onDragStart={(e) => {
        setDragStart(true);
        e.dataTransfer.setData('index', index);
      }}
      onDragEnter={() => {
        setDragActive(true);
      }}
      onDragLeave={() => {
        setDragActive(false);
      }}
      onDragOver={(e) => {
        if (e) {
          e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
      }}
      onDragEnd={() => {
        setDragStart(false);
      }}
      onDrop={(e) => {
        if (e) {
          e.preventDefault();
        }
        const newIndex = +e.dataTransfer.getData('index');
        if (!Number.isNaN(newIndex)) {
          onChangeIndex(newIndex);
        }
        setDragActive(false);
        return false;
      }}
    >
      <button
        tabIndex="-1"
        type="button"
        className={styles.remove}
        title="Удалить"
        onClick={onClickRemove}
      >
        <IconCloseCircle />
      </button>
      <img src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  index: PropTypes.number.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  onChangeIndex: PropTypes.func.isRequired,
};

Image.defaultProps = {
  alt: '',
};

export default Image;
