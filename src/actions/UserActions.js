import { ROUTING, ROUTE_LOGIN, ROUTE_HOME } from '../constants/Routing';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../constants/User';
import fb from '../utils/facebookWrapper';

export function getUserStatus() {
  return (dispatch) => {
    fb.getAuthStatus().then(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          id: '3948fj4v45v-34f48cr8uf',
          name: 'John Smith',
        },
      });
    },
      () => loginFail(dispatch),
    );
  };
}

export function login() {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
    });

    fb.login().then(
      () => {
        console.log(LOGIN_SUCCESS);
      },
      err => console.log(LOGIN_FAIL),
    );

    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          id: '3948fj4v45v-34f48cr8uf',
          name: 'John Smith',
        },
      });

      dispatch({
        type: ROUTING,
        payload: {
          method: 'push',
          nextUrl: ROUTE_HOME,
        },
      });
    });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });

    setTimeout(() => {
      dispatch({
        type: ROUTING,
        payload: {
          method: 'push',
          nextUrl: ROUTE_LOGIN,
        },
      });
    });
  };
}

export function clearHistory() {
}

function loginFail(dispatch) {
  dispatch({
    type: LOGIN_FAIL,
  });
}
