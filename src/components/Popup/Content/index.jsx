import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.less';
import IconRemove from '../../IconRemove';

const Content = ({ children, className, onClickClose }) => (
  <div className={`${styles.content} ${className}`}>
    {onClickClose && (
      <div className={styles.close}>
        <IconRemove
          size={48}
          title="Отмена"
          onClick={onClickClose}
        />
      </div>
    )}
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClickClose: PropTypes.func,
};

Content.defaultProps = {
  className: '',
  onClickClose: undefined,
};

export default Content;
