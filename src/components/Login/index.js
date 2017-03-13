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
  };

  render() {
    return (
      <div className={styles.loginContainer}>
        <h1 style={this.styles.title}>{this.title}</h1>
        <RaisedButton className={styles.loginButton} label="LOGIN" backgroundColor={amber500} />
      </div>
    );
  }
}
