import React from 'react';
import Layout from '../../../Layout';
import Header from '../../../Header';
import Logo from '../../../Logo';
import UserPick from '../../../UserPick';
import ContentCreator from '../../../ContentCreator';
import Tags from '../../../Tags';
import styles from '../styles.less';
import Routes from '../../../../utils/routes';

const PagePostCreate = () => (
  <Layout
    header={(
      <Header
        main={[
          <Logo />,
        ]}
        side={[
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
              url: Routes.getAdminTagsCreateUrl(),
            }, {
              name: 'Еда и напитки',
              blue: true,
              url: Routes.getAdminTagsCreateUrl(),
            }]}
          />
        </div>
      </ContentCreator>
    )}
  />
);

export default PagePostCreate;
