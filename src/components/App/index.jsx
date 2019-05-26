import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import PageHome from '../Pages/Home';
import PagePostCreate from '../Pages/Post/Create';
import PageAdminCategories from '../Pages/Admin/Categories';
import PageAdminCategoriesCreate from '../Pages/Admin/Categories/Create';
import PageAdminCategoriesUpdate from '../Pages/Admin/Categories/Update';
import { Routes } from '../../libs';
import './styles.less';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path={Routes.getHomePageUrl()} component={PageHome} />
        <Route exact path={Routes.getCreatePostPageUrl()} component={PagePostCreate} />
        <Route exact path={Routes.getAdminCategoriesUrl()} component={PageAdminCategories} />
        <Route exact path={Routes.getAdminCategoriesUpdateUrl(':id')} component={PageAdminCategoriesUpdate} />
        <Route exact path={Routes.getAdminCategoriesCreateUrl()} component={PageAdminCategoriesCreate} />
      </Switch>
    </Router>
  </>
);

export default App;
