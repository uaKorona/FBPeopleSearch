import React from 'react';
import { Route } from 'react-router';

import App from './containers/App/App';
import PageNotFound from './components/PageNotFound';
import Settings from "./components/Settings";

const routes = (
  <div>
    <Route path="/" component={App}>
      <Route path="/settings" component={Settings}></Route>
    </Route>
    <Route path="*" component={PageNotFound} />
  </div>
);


export default routes;
