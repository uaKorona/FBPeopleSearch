import { combineReducers } from 'redux';
import mainMenu from './mainMenu';
import user from './user';
import fbState from './fb';
import people from './people';

const rootReducer = combineReducers({
  mainMenu,
  user,
  fbState,
  people,
});

export default rootReducer;
