import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import styles from './styles.less';

const FileInput = ({ children, theme }) => {
  const inputRef = useRef(null);

  return (
    <button
      type="button"
      className={classNames({
        [styles.fileInput]: true,
        [theme.fileInput]: !!theme.fileInput,
      })}
      onClick={() => {
        inputRef.current.click();
      }}
    >
      {children}
      <input type="file" ref={inputRef} />
    </button>
  );
};

FileInput.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    fileInput: PropTypes.string,
  }),
};

FileInput.defaultProps = {
  theme: {},
};

export default FileInput;
