import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import PageHome from '../Pages/Home';
import PagePostCreate from '../Pages/Post/Create';
import PageAdminCategories from '../Pages/Admin/Categories';
import { Routes } from '../../libs';
import './styles.less';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path={Routes.getHomePageUrl()} component={PageHome} />
        <Route exact path={Routes.getCreatePostPageUrl()} component={PagePostCreate} />
        <Route path={Routes.getAdminCategoriesUrl()} component={PageAdminCategories} />
      </Switch>
    </Router>
  </>
);

export default App;
