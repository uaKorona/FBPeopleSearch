import { ROUTING, ROUTE_LOGIN, ROUTE_HOME } from '../constants/Routing';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../constants/User';
import fb from '../utils/facebookWrapper';

function loginFail(dispatch) {
  dispatch({
    type: LOGIN_FAIL,
  });
}

function loginSuccess(dispatch) {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: {
      id: '3948fj4v45v-34f48cr8uf',
      name: 'John Smith',
    },
  });
}

function logout(dispatch) {
  dispatch({
    type: LOGOUT,
  });
}

function goHome(dispatch) {
  dispatch({
    type: ROUTING,
    payload: {
      method: 'push',
      nextUrl: ROUTE_HOME,
    },
  });
}

export function login() {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
    });

    fb.login().then(
      () => {
        loginSuccess(dispatch);
        goHome(dispatch);
      },
      err => loginFail(dispatch),
    );
  };
}

export function getUserStatus() {
  return (dispatch) => {
    fb.getAuthStatus().then(
      () => goHome(dispatch),
      () => dispatch(login()),
    );
  };
}


export function logoutUser() {
  return (dispatch) => {
    fb.logout().then(
      () => {
        logout(dispatch);
        setTimeout(() => goHome(dispatch));
      },
      err => console.warn(err),
    );
  };
}

export function clearHistory() {
}
