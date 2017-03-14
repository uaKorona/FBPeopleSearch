import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { amber500, blue900 } from 'material-ui/styles/colors';
import styles from './login.css';

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
    overlayStyle: {

    },
    button: {
      padding: '0.3em 2em',
      height: 'auto',
    },
  };

  /*
   display: flex;
   min-width: 88px;
   flex-direction: column;
   justify-content: center;
   flex-wrap: wrap;
   height: 100vh;
   */

  render() {
    return (
      <div className={styles.loginContainer}>
        <h1 style={this.styles.title}>{this.title}</h1>
        <RaisedButton
          label="LOGIN"
          labelStyle={this.styles.buttonLabel}
          buttonStyle={this.styles.button}
          overlayStyle={this.styles.button}
          backgroundColor={amber500}
        />
      </div>
    );
  }
}
