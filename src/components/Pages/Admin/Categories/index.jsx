import React from 'react';
import Layout from '../../../Layout';
import Header from '../../../Header';
import Logo from '../../../Logo';
import ContentCreator from '../../../ContentCreator';
import Tags from '../../../Tags';
import styles from '../styles.less';
import Routes from '../../../../libs/routes';
import UserPickOrAuth from '../../../UserPickOrAuth';

const PagePostCreate = () => (
  <Layout
    header={(
      <Header
        main={[
          <Logo />,
        ]}
        side={[
          <UserPickOrAuth />,
        ]}
      />
    )}
    content={(
      <ContentCreator>
        <h2 className={styles.title}>Группы категорий</h2>
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

        <h2 className={styles.title}>Категории</h2>
        <div className={styles.section}>
          <Tags
            tags={[{
              name: 'Ритейл',
              blue: true,
              url: Routes.getAdminCategoriesCreateUrl(),
            }, {
              name: 'Еда и напитки',
              blue: true,
              url: Routes.getAdminCategoriesCreateUrl(),
            }]}
          />
        </div>
      </ContentCreator>
    )}
  />
);

export default PagePostCreate;
