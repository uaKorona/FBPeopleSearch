import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import PageNotFound from './components/PageNotFound/index';

const routes = (
  <div>
    <Route path="/" component={App} />
    <Route path="*" component={PageNotFound} />
  </div>
);


export default routes;
