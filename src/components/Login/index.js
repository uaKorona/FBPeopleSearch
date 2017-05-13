import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import { amber500, blue900 } from 'material-ui/styles/colors';
import styles from './login.css';
import logo from '../../content/images/logo-login.jpg';

import * as UserActions from '../../actions/UserActions';
import * as FbActions from '../../actions/FbActions';

class Login extends React.Component {

  static propTypes = {
    fbState: React.PropTypes.shape({
      loading: React.PropTypes.bool.isRequired,
      isLoaded: React.PropTypes.bool.isRequired,
    }).isRequired,
    actions: React.PropTypes.shape({
      login: React.PropTypes.func.isRequired,
      checkFbStatus: React.PropTypes.func.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    this.props.actions.checkFbStatus();
  }

  styles = {
    title: {
      color: blue900,
    },
    buttonLabel: {
      fontSize: '1em',
      color: 'white',
    },
    button: {
      padding: '0.3em 2em',
      height: 'auto',
    },
  };

  login = () => {
    this.props.actions.login();
  };

  renderFbState(loading, isLoaded) {
    if (loading) {
      return (
        <div>
          <span>Facebook loading ...</span>
          <span className={styles.loading} />
        </div>
      );
    }

    if (isLoaded) {
      return (
        <RaisedButton
          label="LOGIN"
          labelStyle={this.styles.buttonLabel}
          buttonStyle={this.styles.button}
          overlayStyle={this.styles.button}
          backgroundColor={amber500}
          onTouchTap={this.login}
        />
      );
    }

    return (
      <div>
        <span>Sorry, guys. Facebook SDK couldn&apos;t be loaded now ...</span>
      </div>
    );
  }

  render() {
    const loading = this.props.fbState.loading;
    const isLoaded = this.props.fbState.isLoaded;

    return (
      <div className={styles.loginContainer}>
        <h1 style={this.styles.title}>FBPeopleSearch</h1>

        <div>
          <img src={logo} className={styles.logo} alt="logo" />
        </div>
        <div className={styles.buttonContainer}>
          {this.renderFbState(loading, isLoaded)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fbState: state.fbState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...UserActions, ...FbActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
