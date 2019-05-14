import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Layout from '../../../../Layout';
import Header from '../../../../Header';
import Logo from '../../../../Logo';
import UserPickOrAuth from '../../../../UserPickOrAuth';
import ContentCreator from '../../../../ContentCreator';
import Button from '../../../../Button';
import CategoryForm from '../../../../CategoryForm';
import { Api, Routes } from '../../../../../libs';
import { loader } from '../../../../../libs/Loader';

const PageAdminCategoriesCreate = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({
    name: '',
    iconUrl: '',
  });
  // TODO: Add loading hook
  // const [loading, setLoading] = useLoading(false);

  // TODO: Add redux
  const submit = async () => {
    if (loading) {
      return;
    }
    loader.start();
    setLoading(true);
    try {
      await Api.createCategory(category);
      setTimeout(() => {
        history.push(Routes.getAdminCategoriesUrl());
      }, 0);
    } catch (err) {
      // TODO: Add notification
      console.error(err);
    }
    loader.done();
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
              green
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
};

export default PageAdminCategoriesCreate;
