import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styles from './styles.less';

const Header = ({ main, side, shadow }) => (
  <div className={styles.header}>
    <div className={styles.inner}>
      <div className={styles.section}>
        {main.map((item, index) => (
          <Fragment key={index}>{item}</Fragment>
        ))}
      </div>
      <div className={styles.section}>
        {side.map((item, index) => (
          <Fragment key={index}>{item}</Fragment>
        ))}
      </div>
    </div>
    {shadow && <div className={styles.shadow} />}
  </div>
);

Header.propTypes = {
  main: PropTypes.arrayOf(PropTypes.node),
  side: PropTypes.arrayOf(PropTypes.node),
  shadow: PropTypes.bool,
};

Header.defaultProps = {
  main: [],
  side: [],
  shadow: true,
};

export default Header;
