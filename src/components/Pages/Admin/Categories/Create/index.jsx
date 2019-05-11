import React from 'react';
import Layout from '../../../../Layout';
import Header from '../../../../Header';
import Logo from '../../../../Logo';
import UserPickOrAuth from '../../../../UserPickOrAuth';
import ContentCreator from '../../../../ContentCreator';
import Button from '../../../../Button';
import CategoryEditor from '../../../../CategoryEditor';

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
        <CategoryEditor />
      </ContentCreator>
    )}
  />
);

export default PagePostCreate;
