import React from 'react';

import styles from './App.css';

export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.element,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    );
  }
}
