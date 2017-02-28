import { ROUTING } from '../constants/Routing';

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
  return goTo('/settings');
}

export function gotoHome() {
  return goTo('/');
}

