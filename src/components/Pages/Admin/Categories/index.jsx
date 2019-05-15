import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Layout from '../../../Layout';
import Header from '../../../Header';
import Logo from '../../../Logo';
import ContentCreator from '../../../ContentCreator';
import Tags from '../../../Tags';
import styles from '../styles.less';
import UserPickOrAuth from '../../../UserPickOrAuth';
import Routes from '../../../../libs/routes';
import Button from '../../../Button';
import { withLoader } from '../../../../libs/Loader';
import * as categoriesActions from '../../../../actions/categories';

const PageAdminCategories = ({ getCategories, categories }) => {
  const getData = async () => {
    try {
      await withLoader(getCategories());
    } catch (err) {
      // TODO: Show error notification
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // TODO: Hide if no user
  return (
    <Layout
      header={(
        <Header
          main={[
            <Logo />,
          ]}
          side={[
            // TODO: Hide if no user
            <Button
              green
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
};

PageAdminCategories.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: Tags.propTypes.tags,
};

PageAdminCategories.defaultProps = {
  categories: [],
};

export default connect(state => ({
  categories: Object.values(state.categories),
}), {
  getCategories: categoriesActions.list,
})(PageAdminCategories);
