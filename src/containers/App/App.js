import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MainMenuActions from '../../actions/MainMenuActions';
import styles from './App.css';

injectTapEventPlugin();

class App extends React.Component {

  propTypes = {
    actions: React.PropTypes.shape({
      gotoSettings: React.PropTypes.func.isRequired
    })
  };

  onSettingsIconTouchTap(event) {
    /* eslint-disable no-console */
    console.log('onSettingsIconTouchTap', event);
    /* eslint-enable no-console */
    this.props.actions.gotoSettings({ name: 'Alex' });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className={styles.app}>
          <AppBar title="FBPeopleSearch" onLeftIconButtonTouchTap={this.onSettingsIconTouchTap}/>
        </div>
      </MuiThemeProvider>
    );
  }
}


function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MainMenuActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
