import { combineReducers } from 'redux';
import mainMenu from './mainMenu';
import settings from './settings';
import user from './user';

const rootReducer = combineReducers({
  mainMenu,
  settings,
  user,
});

export default rootReducer;
