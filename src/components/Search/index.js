import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { amber500 } from 'material-ui/styles/colors';

import styles from './search.css';

import * as SearchActions from '../../actions/SearchActions';
import * as MainMenuActions from '../../actions/MainMenuActions';

class Search extends React.Component {

  static propTypes = {
    search: React.PropTypes.shape({
      people: React.PropTypes.array.isRequired,
      isSearchCompleted: React.PropTypes.bool.isRequired,
    }).isRequired,
    actions: React.PropTypes.shape({
      search: React.PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { errorText: '' };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
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
    this.props.actions.search(this.searchText);
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

function mapStateToProps(state) {
  return {
    search: state.people,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...SearchActions, ...MainMenuActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
