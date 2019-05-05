import React from 'react';
import Layout from '../../../../Layout';
import Header from '../../../../Header';
import Logo from '../../../../Logo';
import UserPick from '../../../../UserPick';
import ContentCreator from '../../../../ContentCreator';
import Button from '../../../../Button';
import TagEditor from '../../../../TagEditor';

const PagePostCreate = () => (
  <Layout
    header={(
      <Header
        main={[
          <Logo />,
        ]}
        side={[
          <Button green>Опубликовать</Button>,
          <UserPick />,
        ]}
      />
    )}
    content={(
      <ContentCreator>
        <TagEditor />
      </ContentCreator>
    )}
  />
);

export default PagePostCreate;
