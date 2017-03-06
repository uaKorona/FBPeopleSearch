import { ROUTING, ROUTE_SETTINGS, ROUTE_LOGIN } from '../constants/Routing';

function goTo(nextUrl) {
  return (dispatch) => {
    dispatch({
      type: ROUTING,
      payload: {
        nextUrl,
      },
    });
  };
}

export function gotoSettings() {
  return goTo(ROUTE_SETTINGS);
}

export function gotoLogin() {
  return goTo(ROUTE_LOGIN);
}

export function gotoHome() {
  return goTo('/');
}

