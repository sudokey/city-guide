import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { create as createCategory } from '../../../../actions/categories';
import Category from './Category';
import { withLoader } from '../../../../libs/Loader';
import Routes from '../../../../libs/routes';

const PageAdminCategoriesCreate = ({ history, createCategory }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Category
      loading={loading}
      onSubmit={async (category) => {
        setLoading(true);
        try {
          await withLoader(createCategory(category));
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
  createCategory: PropTypes.func.isRequired,
};

export default connect(null, {
  createCategory,
})(PageAdminCategoriesCreate);
