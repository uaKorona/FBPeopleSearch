import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { amber500 } from 'material-ui/styles/colors';

import styles from './search.css';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = { errorText: '' };
  }

  onSearchTextChange = (event, newValue) => {
    this.searchText = newValue;
    this.clearError();
  };

  onSearchTap = () => {
    const length = (this.searchText && this.searchText.length) || 0;

    if (length === 0) {
      this.setError('required');
      return;
    }

    if (length < 3) {
      this.setError('3 symbols at least');
      return;
    }

    this.clearError();
  };

  setError(errorText) {
    this.setState({ errorText });
  }

  clearError() {
    if (this.state.errorText) {
      this.setState({ errorText: '' });
    }
  }

  searchText = '';

  inlineStyles = {
    labelStyle: {
      fontSize: '1em',
      color: 'white',
    },
    button: {
      padding: '0.3em 2em',
      height: 'auto',
    },
  };

  render() {
    const errorText = this.state.errorText;

    return (
      <div className={styles.search__block}>
        <TextField
          fullWidth
          hintText="Type first 3 letters for search"
          errorText={errorText}
          onChange={this.onSearchTextChange}
          maxLength="20"
        />
        <div className={styles.buttonContainer}>
          <RaisedButton
            label="Search"
            labelStyle={this.inlineStyles.labelStyle}
            buttonStyle={this.inlineStyles.button}
            overlayStyle={this.inlineStyles.button}
            backgroundColor={amber500}
            onTouchTap={this.onSearchTap}
          />
        </div>
      </div>
    );
  }
}

export default Search;
