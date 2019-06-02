import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { create as createCategory } from '../../../../../actions/categories';
import CategoryForm from '../../../../CategoryForm';
import { withLoader } from '../../../../../libs/Loader';
import Popup, { Content } from '../../../../Popup';
import Routes from '../../../../../libs/routes';
import styles from '../styles.less';

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
      <Content
        className={styles.popupContent}
        onClickClose={redirectToAdminCategories}
      >
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
      </Content>
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
