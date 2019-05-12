import React from 'react';
import Layout from '../../../../Layout';
import Header from '../../../../Header';
import Logo from '../../../../Logo';
import UserPickOrAuth from '../../../../UserPickOrAuth';
import ContentCreator from '../../../../ContentCreator';
import Button from '../../../../Button';
import CategoryForm from '../../../../CategoryForm';

const PagePostCreate = () => (
  <Layout
    header={(
      <Header
        main={[
          <Logo />,
        ]}
        side={[
          <Button green>Опубликовать</Button>,
          <UserPickOrAuth />,
        ]}
      />
    )}
    content={(
      <ContentCreator>
        <CategoryForm />
      </ContentCreator>
    )}
  />
);

export default PagePostCreate;
