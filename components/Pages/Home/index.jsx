import React from 'react';
import Layout from '../../Layout';
import Header from '../../Header';
import Logo from '../../Logo';
import UserPick from '../../UserPick';

const PageHome = () => (
  <Layout
    header={(
      <Header
        main={[
          <Logo />,
        ]}
        side={[
          <UserPick />,
        ]}
      />
    )}
    content={(
      <div>Home Page</div>
    )}
  />
);

export default PageHome;
