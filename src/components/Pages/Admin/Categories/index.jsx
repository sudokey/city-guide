import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
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

const PageAdminCategories = ({ history }) => {
  // TODO: Move to CategoryCreate and CategoryUpdate
  const onSuccess = () => {
    setTimeout(() => {
      history.push(Routes.getAdminCategoriesUrl());
    }, 0);
  };

  return (
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
            <Route
              exact
              path={Routes.getAdminCategoriesCreateUrl()}
              component={props => (
                <CategoryCreate
                  {...props}
                  onSuccess={onSuccess}
                />
              )}
            />
            <Route
              exact
              path={Routes.getAdminCategoriesUpdateUrl(':id')}
              component={props => (
                <CategoryUpdate
                  {...props}
                  onSuccess={onSuccess}
                />
              )}
            />
          </Switch>
        </ContentCreator>
      </LayoutContent>
    </Layout>
  );
};

PageAdminCategories.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default PageAdminCategories;
