import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles.less';
import { Routes } from '../../utils';

const Logo = () => (
  <Link to={Routes.getHomePageUrl()} className={styles.logo} />
);

export default Logo;
