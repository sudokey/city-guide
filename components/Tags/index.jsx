import PropTypes from 'prop-types';
import React from 'react';
import Tag from '../Tag';
import styles from './styles.less';

const Tags = ({ tags, blue }) => (
  <div className={styles.tags}>
    {tags.map((tag, index) => (
      <div className={styles.item} key={index}>
        <Tag
          {...tag}
          blue={blue}
        />
      </div>
    ))}
  </div>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape(Tag.propTypes)),
  blue: PropTypes.bool,
};

Tags.defaultProps = {
  tags: [],
  blue: false,
};

export default Tags;
