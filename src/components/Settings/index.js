import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Divider from 'material-ui/Divider';
import MapsDirections from 'material-ui/svg-icons/maps/directions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SettingsActions from '../../actions/SettingsActions';


class Settings extends React.Component {

  static propTypes = {
    actions: React.PropTypes.shape({
      logout: React.PropTypes.func.isRequired,
    }).isRequired,
  };

  onLogoutTap = () => {
    this.actions.logout();
  };

  render() {
    return (
      <div>
        <List>
          <ListItem primaryText="Some action" leftIcon={<ContentInbox />} />
        </List>
        <Divider />
        <List>
          <ListItem
            primaryText="Logout"
            leftIcon={<MapsDirections />}
            onTouchTap={this.onLogoutTap}
          />
        </List>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SettingsActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
