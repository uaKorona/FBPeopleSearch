import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App/App';
import PageNotFound from './components/PageNotFound';
import Settings from './components/Settings';
import Home from './containers/Home/index';

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/settings" component={Settings} />
    </Route>
    <Route path="*" component={PageNotFound} />
  </div>
);


export default routes;
