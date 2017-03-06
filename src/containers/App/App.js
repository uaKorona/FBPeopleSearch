import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

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
      gotoLogin: React.PropTypes.func.isRequired,
    }).isRequired,
    children: React.PropTypes.element,
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static defaultProps = {
    children: '',
  };

  componentWillMount() {
    this.leftIcon = this.getLeftIcon(!this.context.router.isActive(ROUTE_SETTINGS));
  }

  onSettingsIconTouchTap = () => {
    this.leftIcon = this.getLeftIcon(false);
    this.props.actions.gotoSettings({ name: 'Alex' });
  };

  onTitleTouchTap = () => {
    this.leftIcon = this.getLeftIcon(true);
    this.props.actions.gotoHome();
  };

  getLeftIcon(isHome) {
    if (isHome) {
      return (
        <IconButton onClick={this.onSettingsIconTouchTap}>
          <NavigationMenu />
        </IconButton>
      );
    }
    return (
      <IconButton onClick={this.onTitleTouchTap}>
        <ActionHome />
      </IconButton>
    );
  }

  leftIcon;

  render() {
    return (
      <div className={styles.app}>
        <AppBar
          title="FBPeopleSearch"
          iconElementLeft={this.leftIcon}
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
