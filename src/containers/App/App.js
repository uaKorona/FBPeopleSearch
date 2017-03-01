import React from 'react';

import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import * as MainMenuActions from '../../actions/MainMenuActions';
import { ROUTE_SETTINGS } from '../../constants/Routing';
import styles from './App.css';

class App extends React.Component {

  static propTypes = {
    actions: React.PropTypes.shape({
      gotoSettings: React.PropTypes.func.isRequired,
      gotoHome: React.PropTypes.func.isRequired,
    }).isRequired,
    children: React.PropTypes.element,
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static defaultProps = {
    children: '',
    showSettingsIcon: true,
  };

  componentWillMount() {
    this.showSettingsIcon = !this.context.router.isActive(ROUTE_SETTINGS);
  }

  onSettingsIconTouchTap = () => {
    this.showSettingsIcon = false;
    this.props.actions.gotoSettings({ name: 'Alex' });
  };

  onTitleTouchTap = () => {
    this.showSettingsIcon = true;
    this.props.actions.gotoHome();
  };

  showSettingsIcon = true;

  render() {
    return (
      <div className={styles.app}>
        <AppBar
          title="FBPeopleSearch"
          onLeftIconButtonTouchTap={this.onSettingsIconTouchTap}
          onTitleTouchTap={this.onTitleTouchTap}
          showMenuIconButton={this.showSettingsIcon}
        />

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
