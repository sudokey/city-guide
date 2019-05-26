import React from 'react';
import Layout from '../../Layout';
import Header, { Section as HeaderSection } from '../../Header';
import Logo from '../../Logo';
import UserPickOrAuth from '../../UserPickOrAuth';

const PageHome = () => (
  <Layout>
    <Header>
      <HeaderSection>
        <Logo />
      </HeaderSection>
      <HeaderSection>
        <UserPickOrAuth />
      </HeaderSection>
    </Header>
  </Layout>
);

export default PageHome;
