import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class Settings extends React.Component {
  title = 'Settings';

  render() {
    return (
      <div>
        <List>
          <ListItem primaryText="Some action" leftIcon={<ContentInbox />} />
        </List>
        <Divider />
        <List>
          <ListItem primaryText="Logout" rightIcon={<ActionInfo />} />
        </List>
      </div>
    );
  }
}
