import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR
import { Provider } from 'react-redux';

import routes from './routes';
import configStore from './store/configStore';

const store = configStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    </AppContainer>,
    document.getElementById('root'));
};


render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App/App', () => {
    render();
  });
}
