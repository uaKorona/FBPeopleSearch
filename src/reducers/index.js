import { combineReducers } from 'redux';
import mainMenu from './mainMenu';
import settings from './settings';
import user from './user';
import fb from './fb';

const rootReducer = combineReducers({
  mainMenu,
  settings,
  user,
  fb,
});

export default rootReducer;
