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
import { remove as removeCategory } from '../../../../actions/categories';
import { withLoader } from '../../../../libs/Loader';
import Confirmation from '../../../Confirmation';

const PageAdminCategories = ({ categories, history, removeCategory }) => (
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
        <h2 className={styles.title}>Категории</h2>
        <div className={styles.section}>
          <Confirmation
            title="Уверены что хотите удалить?"
            onAgree={(item) => {
              try {
                withLoader(removeCategory(item));
              } catch (err) {
                // TODO: Show notification
                console.error(err);
              }
            }}
          >
            {({ showConfirmation }) => (
              <Tags
                // TODO: Hide if no user
                onClickAdd={() => {
                  history.push(Routes.getAdminCategoriesCreateUrl());
                }}
                tags={categories.map(item => ({
                  ...item,
                  // TODO: Hide if no user
                  onClickRemove: () => {
                    showConfirmation(item);
                  },
                }))}
              />
            )}
          </Confirmation>
        </div>
      </ContentCreator>
    )}
  />
);

PageAdminCategories.propTypes = {
  categories: Tags.propTypes.tags,
  removeCategory: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

PageAdminCategories.defaultProps = {
  categories: [],
};

export default connect(state => ({
  categories: Object.values(state.categories),
}), {
  removeCategory,
})(PageAdminCategories);
