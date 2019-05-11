import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import PageHome from '../Pages/Home';
import PagePostCreate from '../Pages/Post/Create';
import PageAdminCategories from '../Pages/Admin/Categories';
import PageAdminCategoriesCreate from '../Pages/Admin/Categories/Create';
import { Routes } from '../../libs';
import './styles.less';

const App = () => (
  <>
    <Router>
      <Route exact path={Routes.getHomePageUrl()} component={PageHome} />
      <Route exact path={Routes.getCreatePostPageUrl()} component={PagePostCreate} />
      <Route exact path={Routes.getAdminCategoriesUrl()} component={PageAdminCategories} />
      <Route exact path={Routes.getAdminCategoriesCreateUrl()} component={PageAdminCategoriesCreate} />
    </Router>
  </>
);

export default App;
