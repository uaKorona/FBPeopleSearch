import React from 'react';

import TextField from 'material-ui/TextField';
import styles from './search.css';

class Search extends React.Component {
  render() {
    return (
      <div className={styles.search__block}>
        <TextField
          fullWidth="true"
          hintText="Type first 3 letters for search"
          errorText=""
        />
      </div>
    );
  }
}

export default Search;
