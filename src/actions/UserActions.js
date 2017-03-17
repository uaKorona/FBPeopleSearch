import { ROUTING, ROUTE_LOGIN, ROUTE_HOME } from '../constants/Routing';
import { LOGIN, LOGIN_SUCCESS, LOGOUT } from '../constants/User';

export function login() {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
    });

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
