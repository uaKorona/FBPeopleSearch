import { ROUTING, ROUTE_LOGIN } from '../constants/Routing';
import { LOGOUT } from '../constants/User';

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
