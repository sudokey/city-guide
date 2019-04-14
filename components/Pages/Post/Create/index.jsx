import React from 'react';
import Layout from '../../../Layout';
import Header from '../../../Header';
import Logo from '../../../Logo';
import UserPick from '../../../UserPick';
import Button from '../../../Button';
import styles from '../styles.less';
import Editor from '../../../Editor';

const PagePostCreate = () => (
  <Layout
    header={(
      <Header
        main={[
          <Logo />,
          <span>Драфт</span>,
          <span className={styles.status}>Сохранено</span>,
        ]}
        side={[
          <Button green>Опубликовать</Button>,
          <UserPick />,
        ]}
      />
    )}
    content={(
      <div className={styles.content}>
        <Editor />
      </div>
    )}
  />
);

export default PagePostCreate;
