import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import styles from './App.css';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div className={styles.app}>
      <AppBar title="FBPeopleSearch" />
    </div>
  </MuiThemeProvider>
);

export default App;
