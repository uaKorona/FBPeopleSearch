import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { ROUTE_SETTINGS } from './constants/Routing';

import App from './containers/App/App';
import PageNotFound from './components/PageNotFound';
import Settings from './components/Settings';
import Home from './containers/Home/index';

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path={ROUTE_SETTINGS} component={Settings} />
    </Route>
    <Route path="*" component={PageNotFound} />
  </div>
);


export default routes;
