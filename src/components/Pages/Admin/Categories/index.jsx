import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import Layout, { Content as LayoutContent } from '../../../Layout';
import Header, { Section as HeaderSection } from '../../../Header';
import Logo from '../../../Logo';
import ContentCreator from '../../../ContentCreator';
import Tags from '../../../Tags';
import styles from '../styles.less';
import UserPickOrAuth from '../../../UserPickOrAuth';
import Routes from '../../../../libs/routes';
import { remove as removeCategory } from '../../../../actions/categories';
import { withLoader } from '../../../../libs/Loader';
import Confirmation from '../../../Confirmation';
import CategoryCreate from './Category/Create';
import CategoryUpdate from './Category/Update';

const PageAdminCategories = ({ categories, history, removeCategory }) => {
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
          <h2 className={styles.title}>Категории</h2>
          <div className={styles.section}>
            <Confirmation
              title="Уверены что хотите удалить?"
              onAgree={(item) => {
                try {
                  withLoader(removeCategory(item));
                } catch (err) {
                  // TODO: Show notification
                  console.error(err);
                }
              }}
            >
              {({ showConfirmation }) => (
                <Tags
                  // TODO: Hide if no user
                  onClickAdd={() => {
                    history.push(Routes.getAdminCategoriesCreateUrl());
                  }}
                  tags={categories.map(item => ({
                    ...item,
                    url: Routes.getAdminCategoriesUpdateUrl(item.id),
                    // TODO: Hide if no user
                    onClickRemove: (e) => {
                      e.preventDefault();
                      showConfirmation(item);
                    },
                  }))}
                />
              )}
            </Confirmation>
          </div>

          <h2 className={styles.title}>Группы</h2>
          <div className={styles.section}>
            <Tags
              // TODO: Hide if no user
              onClickAdd={() => {
                history.push(Routes.getAdminCategoriesCreateUrl());
              }}
            />
          </div>

          {categories.length && (
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
          )}
        </ContentCreator>
      </LayoutContent>
    </Layout>
  );
};

PageAdminCategories.propTypes = {
  categories: Tags.propTypes.tags,
  removeCategory: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

PageAdminCategories.defaultProps = {
  categories: [],
};

export default connect(state => ({
  categories: Object.values(state.categories),
}), {
  removeCategory,
})(PageAdminCategories);
