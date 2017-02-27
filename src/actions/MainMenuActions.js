import { ROUTING } from '../constants/Routing';

export function gotoSettings(payload) {
  return (dispatch) => {
    console.log(payload); // eslint-disable-line no-console

    dispatch({
      type: ROUTING,
      payload: {
        nextUrl: '/settings',
      },
    });
  };
}

export function gotoHome() {
}
