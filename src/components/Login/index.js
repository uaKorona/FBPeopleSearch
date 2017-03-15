import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { amber500, blue900 } from 'material-ui/styles/colors';
import styles from './login.css';
import logo from '../../content/images/logo.jpg';

export default class Login extends React.Component {
  title = 'FBPeopleSearch';

  styles = {
    title: {
      color: blue900,
    },
    buttonLabel: {
      fontSize: '1em',
      color: 'white',
    },
    overlayStyle: {},
    button: {
      padding: '0.3em 2em',
      height: 'auto',
    },
  };

  render() {
    return (
      <div className={styles.loginContainer}>
        <h1 style={this.styles.title}>{this.title}</h1>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.buttonContainer}>
          <RaisedButton
            label="LOGIN"
            labelStyle={this.styles.buttonLabel}
            buttonStyle={this.styles.button}
            overlayStyle={this.styles.button}
            backgroundColor={amber500}
          />
        </div>
      </div>
    );
  }
}
