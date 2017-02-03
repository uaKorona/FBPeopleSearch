import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR
import routes from './routes';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Router history={browserHistory} routes={routes} />
    </AppContainer>,
    document.getElementById('root'));
};


render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}
