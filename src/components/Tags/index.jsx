import PropTypes from 'prop-types';
import React from 'react';
import Tag from '../Tag';
import styles from './styles.less';
import Add from './Add';

const Tags = ({ tags, onClickAdd }) => (
  <div className={styles.tags}>
    {tags.map((tag, index) => (
      <div className={styles.item} key={index}>
        <Tag {...tag} />
      </div>
    ))}
    {onClickAdd && (
      <div className={styles.item}>
        <Add
          onClick={onClickAdd}
        />
      </div>
    )}
  </div>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape(Tag.propTypes)),
  onClickAdd: PropTypes.func,
};

Tags.defaultProps = {
  tags: [],
  onClickAdd: undefined,
};

export default Tags;
