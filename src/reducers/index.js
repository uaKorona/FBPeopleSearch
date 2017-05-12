import { combineReducers } from 'redux';
import mainMenu from './mainMenu';
import settings from './settings';
import user from './user';
import fbState from './fb';

const rootReducer = combineReducers({
  mainMenu,
  settings,
  user,
  fbState,
});

export default rootReducer;
