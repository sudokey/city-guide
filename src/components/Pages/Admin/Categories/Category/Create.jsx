import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { create as createCategory } from '../../../../../actions/categories';
import CategoryForm from '../../../../CategoryForm';
import { withLoader } from '../../../../../libs/Loader';
import Popup, { Content as PopupContent } from '../../../../Popup';
import Routes from '../../../../../libs/routes';

const CategoryCreate = ({ createCategory, history }) => {
  const [loading, setLoading] = useState(false);

  const redirectToAdminCategories = () => {
    setTimeout(() => {
      history.push(Routes.getAdminCategoriesUrl());
    }, 0);
  };

  return (
    <Popup
      dark
      onClickClose={redirectToAdminCategories}
    >
      <PopupContent>
        <CategoryForm
          loading={loading}
          onSubmit={async (category) => {
            setLoading(true);
            try {
              await withLoader(createCategory(category));
              redirectToAdminCategories();
            } catch (err) {
              // TODO: Add notification
              console.error(err);
            }
            setLoading(false);
          }}
        />
      </PopupContent>
    </Popup>
  );
};

CategoryCreate.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  createCategory: PropTypes.func.isRequired,
};

export default connect(null, {
  createCategory,
})(CategoryCreate);
