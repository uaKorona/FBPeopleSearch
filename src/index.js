import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';
import configStore from './store/configStore';

injectTapEventPlugin();

const store = configStore();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider>
        <Provider store={store}>
          <Router history={browserHistory} routes={routes} />
        </Provider>
      </MuiThemeProvider>
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


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, (err) => {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
