import PropTypes from 'prop-types';
import React from 'react';
import Tag from '../Tag';
import styles from './styles.less';

const Tags = ({ tags }) => (
  <div className={styles.tags}>
    {tags.map((tag, index) => (
      <div className={styles.item} key={index}>
        <Tag {...tag} />
      </div>
    ))}
  </div>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape(Tag.propTypes)),
};

Tags.defaultProps = {
  tags: [],
};

export default Tags;
