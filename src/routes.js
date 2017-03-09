import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { ROUTE_SETTINGS, ROUTE_LOGIN } from './constants/Routing';

import App from './containers/App/App';
import PageNotFound from './components/PageNotFound';
import Settings from './components/Settings';
import Login from './components/Login';
import Home from './containers/Home';

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path={ROUTE_SETTINGS} component={Settings} />
    </Route>
    <Route path={ROUTE_LOGIN} component={Login} />
    <Route path="*" component={PageNotFound} />
  </div>
);


export default routes;
