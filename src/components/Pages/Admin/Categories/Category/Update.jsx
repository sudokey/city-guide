import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { update as updateCategory } from '../../../../../actions/categories';
import Category from './index';
import { withLoader } from '../../../../../libs/Loader';
import Popup, { Content as PopupContent } from '../../../../Popup';

const CategoryUpdate = ({ category, onSuccess, updateCategory }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Popup
      dark
      onClickClose={onSuccess}
    >
      <PopupContent>
        <Category
          categoryData={category}
          loading={loading}
          onSubmit={async (category) => {
            setLoading(true);
            try {
              await withLoader(updateCategory(category));
              setTimeout(onSuccess, 0);
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
  category: Category.propTypes.categoryData,
  onSuccess: PropTypes.func.isRequired,
};

CategoryUpdate.defaultProps = {
  category: undefined,
};

export default connect((state, props) => ({
  category: state.categories[props.match.params.id],
}), {
  updateCategory,
})(CategoryUpdate);
