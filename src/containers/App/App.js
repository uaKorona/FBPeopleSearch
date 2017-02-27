import React from 'react';

import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MainMenuActions from '../../actions/MainMenuActions';
import styles from './App.css';

class App extends React.Component {

  static propTypes = {
    actions: React.PropTypes.shape({
      gotoSettings: React.PropTypes.func.isRequired,
    }).isRequired,
    children: React.PropTypes.element.isRequired,
  };

  onSettingsIconTouchTap = (event) => {
    /* eslint-disable no-console */
    console.log('onSettingsIconTouchTap', event);
    /* eslint-enable no-console */
    this.props.actions.gotoSettings({ name: 'Alex' });
  };

  render() {
    return (
      <div className={styles.app}>
        <AppBar title="FBPeopleSearch" onLeftIconButtonTouchTap={this.onSettingsIconTouchTap} />

        {this.props.children}
      </div>
    );
  }
}


function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MainMenuActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
