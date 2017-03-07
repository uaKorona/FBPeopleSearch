import { combineReducers } from 'redux';
import mainMenu from './mainMenu';
import settings from './settings';

const rootReducer = combineReducers({
  mainMenu,
  settings,
});

export default rootReducer;
