import { combineReducers } from 'redux';
import mainMenu from './mainMenu';
import user from './user';
import fbState from './fb';

const rootReducer = combineReducers({
  mainMenu,
  user,
  fbState,
});

export default rootReducer;
