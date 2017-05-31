import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { ROUTE_HOME, ROUTE_HOME_SETTINGS, ROUTE_LOGIN } from './constants/Routing';

import App from './containers/App/App';
import PageNotFound from './components/PageNotFound';
import Settings from './components/Settings';
import Login from './components/Login';
import Home from './containers/Home';
import Search from './components/Search';

const routes = (
  <div>
    <Route path="/" component={App}>
      <Route path={ROUTE_HOME} component={Home}>
        <IndexRoute component={Search} />
        <Route path={ROUTE_HOME_SETTINGS} component={Settings} />
      </Route>
      <Route path={ROUTE_LOGIN} component={Login} />
    </Route>
    <Route path="*" component={PageNotFound} />
  </div>
);


export default routes;
