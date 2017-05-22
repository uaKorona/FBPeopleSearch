import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../constants/User';
import fb from '../utils/facebookWrapper';
import { gotoLogin, gotoHome } from './MainMenuActions';

function loginFail(dispatch) {
  dispatch({
    type: LOGIN_FAIL,
  });
}

function loginSuccess(dispatch, user) {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: {
      id: user.id || '3948fj4v45v-34f48cr8uf',
      name: user.name || 'John Smith',
    },
  });
}

function logout(dispatch) {
  dispatch({
    type: LOGOUT,
  });
}

export function login() {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
    });

    fb.login().then(
      () => {
        dispatch(gotoHome());
        fb.getProfile().then(user => loginSuccess(dispatch, user));
      },
      err => loginFail(dispatch),
    );
  };
}

export function getUserStatus() {
  return (dispatch) => {
    fb.getAuthStatus().then(
      () => dispatch(gotoHome()),
      () => dispatch(login()),
    );
  };
}


export function logoutUser() {
  return (dispatch) => {
    fb.logout().then(
      () => {
        logout(dispatch);
        setTimeout(() => dispatch(gotoLogin()));
      },
      err => console.warn(err),
    );
  };
}

export function clearHistory() {
}
