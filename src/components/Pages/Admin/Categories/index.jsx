import PropTypes from 'prop-types';
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
import { remove as removeCategory } from '../../../../actions/categories';
import { withLoader } from '../../../../libs/Loader';

const PageAdminCategories = ({ categories, removeCategory }) => (
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
              onClickRemove: () => {
                withLoader(removeCategory(item));
              },
            }))}
          />
        </div>
      </ContentCreator>
    )}
  />
);

PageAdminCategories.propTypes = {
  categories: Tags.propTypes.tags,
  removeCategory: PropTypes.func.isRequired,
};

PageAdminCategories.defaultProps = {
  categories: [],
};

export default connect(state => ({
  categories: Object.values(state.categories),
}), {
  removeCategory,
})(PageAdminCategories);
