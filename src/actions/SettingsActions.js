import { ROUTING, ROUTE_LOGIN } from '../constants/Routing';
import { LOGOUT } from '../constants/Settings';

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
          ROUTE_LOGIN,
        },
      });
    });
  };
}
