import React from 'react';
import Layout from '../../../Layout';
import Header from '../../../Header';
import Logo from '../../../Logo';
import UserPick from '../../../UserPick';
import ContentCreator from '../../../ContentCreator';
import Button from '../../../Button';
import Tags from '../../../Tags';
import styles from '../styles.less';

const PagePostCreate = () => (
  <Layout
    header={(
      <Header
        main={[
          <Logo />,
        ]}
        side={[
          <Button green>
            Опубликовать
          </Button>,
          <UserPick />,
        ]}
      />
    )}
    content={(
      <ContentCreator>
        <h2 className={styles.title}>Категории тэгов</h2>
        <div className={styles.section}>
          <Tags
            tags={[{
              name: 'Ритейл',
              blue: true,
              url: '/',
            }, {
              name: 'Еда и напитки',
              blue: true,
              url: '/',
            }]}
          />
        </div>

        <h2 className={styles.title}>Тэги</h2>
        <div className={styles.section}>
          <Tags
            tags={[{
              name: 'Ритейл',
              blue: true,
              url: '/',
            }, {
              name: 'Еда и напитки',
              blue: true,
              url: '/',
            }]}
          />
        </div>
      </ContentCreator>
    )}
  />
);

export default PagePostCreate;
