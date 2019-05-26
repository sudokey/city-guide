import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { update as updateCategory } from '../../../../actions/categories';
import Category from './Category';
import { withLoader } from '../../../../libs/Loader';
import Routes from '../../../../libs/routes';

const PageAdminCategoriesCreate = ({ category, history, updateCategory }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Category
      categoryData={category}
      loading={loading}
      onSubmit={async (category) => {
        setLoading(true);
        try {
          await withLoader(updateCategory(category));
          setTimeout(() => {
            history.push(Routes.getAdminCategoriesUrl());
          }, 0);
        } catch (err) {
          // TODO: Add notification
          console.error(err);
        }
        setLoading(false);
      }}
    />
  );
};

PageAdminCategoriesCreate.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  updateCategory: PropTypes.func.isRequired,
  category: Category.propTypes.categoryData,
};

PageAdminCategoriesCreate.defaultProps = {
  category: undefined,
};

export default connect((state, props) => ({
  category: state.categories[props.match.params.id],
}), {
  updateCategory,
})(PageAdminCategoriesCreate);
