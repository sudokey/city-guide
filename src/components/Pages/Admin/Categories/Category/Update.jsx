import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { update as updateCategory } from '../../../../../actions/categories';
import CategoryForm from '../../../../CategoryForm';
import { withLoader } from '../../../../../libs/Loader';
import Popup, { Content as PopupContent } from '../../../../Popup';
import Routes from '../../../../../libs/routes';

const CategoryUpdate = ({
  category, updateCategory, history,
}) => {
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
          initialData={category}
          loading={loading}
          onSubmit={async (category) => {
            setLoading(true);
            try {
              await withLoader(updateCategory(category));
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

CategoryUpdate.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  updateCategory: PropTypes.func.isRequired,
  category: CategoryForm.propTypes.initialData,
};

CategoryUpdate.defaultProps = {
  category: undefined,
};

export default connect((state, props) => ({
  category: state.categories[props.match.params.id],
}), {
  updateCategory,
})(CategoryUpdate);
