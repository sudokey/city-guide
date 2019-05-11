import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles.less';
import { Routes } from '../../libs';

const Logo = ({ asLink, size }) => {
  const Tag = asLink ? Link : 'span';

  return (
    <Tag
      to={asLink ? Routes.getHomePageUrl() : undefined}
      className={styles.logo}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

Logo.propTypes = {
  asLink: PropTypes.bool,
  size: PropTypes.number,
};

Logo.defaultProps = {
  asLink: true,
  size: 34,
};

export default Logo;
