import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import styles from './App.css';
import * as UserActions from '../../actions/UserActions';
import * as MainMenuActions from '../../actions/MainMenuActions';
import { ROUTE_ROOT } from '../../constants/Routing';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.element,
    user: React.PropTypes.shape({
      isNotAuthenticated: React.PropTypes.bool.isRequired,
    }).isRequired,
    actions: React.PropTypes.shape({
      gotoHome: React.PropTypes.func.isRequired,
      logout: React.PropTypes.func.isRequired,
      getUserStatus: React.PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    children: '',
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static isUserNotAuthenticated(user) {
    return user.isNotAuthenticated;
  }

  componentWillMount() {
    this.props.actions.getUserStatus();

    if (App.isUserNotAuthenticated(this.props.user)) {
      this.props.actions.logout();
      return;
    }

    if (this.context.router.isActive(ROUTE_ROOT, true)) {
      this.props.actions.gotoHome();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.isNotAuthenticated === nextProps.user.isNotAuthenticated) {
      return;
    }

    if (App.isUserNotAuthenticated(nextProps.user)) {
      this.props.actions.logout();
      return;
    }

    if (this.context.router.isActive(ROUTE_ROOT, true)) {
      this.props.actions.gotoHome();
      return;
    }

  }

  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...UserActions, ...MainMenuActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
