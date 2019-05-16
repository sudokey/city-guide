import { connect } from 'react-redux';
import React from 'react';
import Layout from '../../../Layout';
import Header from '../../../Header';
import Logo from '../../../Logo';
import ContentCreator from '../../../ContentCreator';
import Tags from '../../../Tags';
import styles from '../styles.less';
import UserPickOrAuth from '../../../UserPickOrAuth';
import Routes from '../../../../libs/routes';
import Button from '../../../Button';

const PageAdminCategories = ({ categories }) => (
  <Layout
    header={(
      <Header
        main={[
          <Logo />,
        ]}
        side={[
          // TODO: Hide if no user
          <Button
            url={Routes.getAdminCategoriesCreateUrl()}
          >
            Добавить
          </Button>,
          <UserPickOrAuth />,
        ]}
      />
    )}
    content={(
      <ContentCreator>
        <h2 className={styles.title}>Категории</h2>
        <div className={styles.section}>
          <Tags
            tags={categories.map(item => ({
              ...item,
              blue: true,
            }))}
          />
        </div>
      </ContentCreator>
    )}
  />
);

PageAdminCategories.propTypes = {
  categories: Tags.propTypes.tags,
};

PageAdminCategories.defaultProps = {
  categories: [],
};

export default connect(state => ({
  categories: Object.values(state.categories),
}))(PageAdminCategories);
