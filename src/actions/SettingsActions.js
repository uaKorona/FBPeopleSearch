import { logoutUser } from './UserActions';

export function logout() {
  return dispatch => dispatch(logoutUser());
}

export function clearHistory() {

}
