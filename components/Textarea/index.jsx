import PropTypes from 'prop-types';
import autosize from 'autosize';
import React, { useEffect, useRef } from 'react';
import styles from './styles.less';

const Textarea = ({ value, ...rest }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      autosize(textareaRef.current);
    }, 0);

    return () => {
      autosize.destroy(textareaRef.current);
    };
  }, []);

  useEffect(() => {
    autosize.update(textareaRef.current);
  }, [value]);

  return (
    <textarea
      {...rest}
      rows={1}
      ref={textareaRef}
      className={styles.textarea}
      value={value}
    />
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
};

Textarea.defaultProps = {
  value: '',
};

export default Textarea;
