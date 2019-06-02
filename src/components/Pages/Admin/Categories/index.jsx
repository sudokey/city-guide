import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Layout, { Content as LayoutContent } from '../../../Layout';
import Header, { Section as HeaderSection } from '../../../Header';
import Logo from '../../../Logo';
import ContentCreator from '../../../ContentCreator';
import UserPickOrAuth from '../../../UserPickOrAuth';
import Routes from '../../../../libs/routes';
import CategoryCreate from './Category/Create';
import CategoryUpdate from './Category/Update';
import CategoryList from './Category/List';

const PageAdminCategories = () => (
  <Layout>
    <Header>
      <HeaderSection>
        <Logo />
      </HeaderSection>
      <HeaderSection>
        <UserPickOrAuth />
      </HeaderSection>
    </Header>
    <LayoutContent>
      <ContentCreator>
        <CategoryList />
        <Switch>
          <Route exact path={Routes.getAdminCategoriesCreateUrl()} component={CategoryCreate} />
          <Route exact path={Routes.getAdminCategoriesUpdateUrl(':id')} component={CategoryUpdate} />
        </Switch>
      </ContentCreator>
    </LayoutContent>
  </Layout>
);

export default PageAdminCategories;
