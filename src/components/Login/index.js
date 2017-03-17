import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import { amber500, blue900 } from 'material-ui/styles/colors';
import styles from './login.css';
import logo from '../../content/images/logo-login.jpg';

import * as UserActions from '../../actions/UserActions';


class Login extends React.Component {

  static propTypes = {
    actions: React.PropTypes.shape({
      login: React.PropTypes.func.isRequired,
    }).isRequired,
  };

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

  render() {
    return (
      <div className={styles.loginContainer}>
        <h1 style={this.styles.title}>FBPeopleSearch</h1>
        <div>
          <img src={logo} className={styles.logo} alt="logo" />
        </div>
        <div className={styles.buttonContainer}>
          <RaisedButton
            label="LOGIN"
            labelStyle={this.styles.buttonLabel}
            buttonStyle={this.styles.button}
            overlayStyle={this.styles.button}
            backgroundColor={amber500}
            onTouchTap={this.login}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
