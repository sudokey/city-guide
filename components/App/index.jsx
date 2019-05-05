import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import styles from './styles.less';
import PageHome from '../Pages/Home';
import PagePostCreate from '../Pages/Post/Create';
import PageAdminTags from '../Pages/Admin/Tags';
import PageAdminTagsCreate from '../Pages/Admin/Tags/Create';
import { Routes } from '../../utils';

const App = () => (
  <div className={styles.app}>
    <Router>
      <Route exact path={Routes.getHomePageUrl()} component={PageHome} />
      <Route exact path={Routes.getCreatePostPageUrl()} component={PagePostCreate} />
      <Route exact path={Routes.getAdminTagsUrl()} component={PageAdminTags} />
      <Route exact path={Routes.getAdminTagsCreateUrl()} component={PageAdminTagsCreate} />
    </Router>
  </div>
);

export default App;
