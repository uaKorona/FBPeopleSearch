import { GOTO_SETTINGS } from '../constants/MainMenu';

export function gotoSettings(payload) {
  return (dispatch) => {
    /* eslint-disable no-console*/
    console.log(payload);
    /* eslint-enable no-console*/
    dispatch({
      type: GOTO_SETTINGS,
    });
  };
}

export function gotoHome() {
}
