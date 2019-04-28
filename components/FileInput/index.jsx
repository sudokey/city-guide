import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import styles from './styles.less';

// TODO: Add drag and drop
const FileInput = ({
  children, theme, inputProps, ...rest
}) => {
  const inputRef = useRef(null);

  return (
    <button
      {...rest}
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
      <input
        {...inputProps}
        type="file"
        ref={inputRef}
      />
    </button>
  );
};

FileInput.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    fileInput: PropTypes.string,
  }),
  inputProps: PropTypes.objectOf(PropTypes.any),
};

FileInput.defaultProps = {
  theme: {},
  inputProps: {},
};

export default FileInput;
