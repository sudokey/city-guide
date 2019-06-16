import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import Tags from '../../../../Tags';
import styles from '../../styles.less';
import Routes from '../../../../../libs/routes';
import { remove as removeCategory } from '../../../../../actions/categories';
import { withLoader } from '../../../../../libs/Loader';
import Confirmation from '../../../../Confirmation';

const CategoryList = ({ categories, history, removeCategory }) => (
  <>
    <h2 className={styles.title}>Группы</h2>
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
              url: Routes.getAdminCategoriesUpdateUrl(item.id),
              // TODO: Hide if no user
              onClickRemove: (e) => {
                e.preventDefault();
                showConfirmation(item);
              },
            }))}
          />
        )}
      </Confirmation>
    </div>
  </>
);

CategoryList.propTypes = {
  categories: Tags.propTypes.tags,
  removeCategory: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

CategoryList.defaultProps = {
  categories: [],
};

export default connect(state => ({
  categories: Object.values(state.categories),
}), {
  removeCategory,
})(withRouter(CategoryList));
