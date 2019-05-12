import PropTypes from 'prop-types';
import React, { useRef } from 'react';

// TODO: Add drag and drop
const FileInput = ({
  children, inputProps, ...rest
}) => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <button
      {...rest}
      type="button"
      ref={buttonRef}
      onClick={() => {
        inputRef.current.click();
      }}
    >
      {children}
      <input
        {...inputProps}
        type="file"
        ref={inputRef}
        style={{
          display: 'none',
        }}
        onChange={(e) => {
          if (typeof inputProps.onChange === 'function') {
            inputProps.onChange(e);
          }
          e.target.value = null;
          buttonRef.current.blur();
        }}
      />
    </button>
  );
};

FileInput.propTypes = {
  children: PropTypes.node.isRequired,
  inputProps: PropTypes.objectOf(PropTypes.any),
};

FileInput.defaultProps = {
  inputProps: {},
};

export default FileInput;
