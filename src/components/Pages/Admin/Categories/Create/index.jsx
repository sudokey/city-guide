import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Layout from '../../../../Layout';
import Header from '../../../../Header';
import Logo from '../../../../Logo';
import UserPickOrAuth from '../../../../UserPickOrAuth';
import ContentCreator from '../../../../ContentCreator';
import Button from '../../../../Button';
import CategoryForm from '../../../../CategoryForm';
import { Routes, Validator } from '../../../../../libs';
import { withLoader } from '../../../../../libs/Loader';
import { create as createCategory } from '../../../../../actions/categories';
import { FIELD_ERROR_REQUIRED } from '../../../../../libs/constants';

const PageAdminCategoriesCreate = ({ history, createCategory }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  // TODO: Validate on create
  const [category, setCategory] = useState({
    name: '',
    iconUrl: '',
  });
  const rules = {
    // TODO: Unify validators
    name: (val) => {
      if (!val || !val.length) {
        return FIELD_ERROR_REQUIRED;
      }
      return null;
    },
    iconUrl: (val) => {
      if (!val || !val.length) {
        return FIELD_ERROR_REQUIRED;
      }
      return null;
    },
  };

  const submit = async () => {
    if (loading) {
      return;
    }

    // TODO: Validate on change
    const { errors, isValid } = Validator.validate(category, rules);
    setErrors(errors);
    if (!isValid) {
      return;
    }

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
  };

  return (
    <Layout
      header={(
        <Header
          main={[
            <Logo />,
          ]}
          side={[
            <Button
              disabled={loading}
              onClick={submit}
            >
              Опубликовать
            </Button>,
            <UserPickOrAuth />,
          ]}
        />
      )}
      content={(
        <ContentCreator>
          <CategoryForm
            data={category}
            errors={errors}
            loading={loading}
            onSubmit={submit}
            onChange={setCategory}
          />
        </ContentCreator>
      )}
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
