import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import styles from './App.css';

injectTapEventPlugin();

class App extends React.Component {

  /* eslint-disable class-methods-use-this*/

  onSettingsIconTouchTap(event) {
    /* eslint-disable no-console */
    console.log('onSettingsIconTouchTap', event);
    /* eslint-enable no-console */
  }
  /* eslint-enable class-methods-use-this*/

  render() {
    return (
      <MuiThemeProvider>
        <div className={styles.app}>
          <AppBar title="FBPeopleSearch" onLeftIconButtonTouchTap={this.onSettingsIconTouchTap} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
