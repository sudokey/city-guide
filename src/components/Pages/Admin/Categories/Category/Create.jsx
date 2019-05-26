import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { create as createCategory } from '../../../../../actions/categories';
import Category from './index';
import { withLoader } from '../../../../../libs/Loader';
import Popup, { Content as PopupContent } from '../../../../Popup';

const CategoryCreate = ({ createCategory, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Popup
      dark
      onClickClose={onSuccess}
    >
      <PopupContent>
        <Category
          loading={loading}
          onSubmit={async (category) => {
            setLoading(true);
            try {
              await withLoader(createCategory(category));
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

CategoryCreate.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  createCategory: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default connect(null, {
  createCategory,
})(CategoryCreate);
