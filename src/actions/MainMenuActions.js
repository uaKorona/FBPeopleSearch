import { ROUTING, ROUTE_SETTINGS } from '../constants/Routing';

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

export function gotoHome() {
  return goTo('/');
}

