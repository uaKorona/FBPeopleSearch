import { FB_LOADED, FB_LOADED_SUCCESS, FB_LOADED_FAIL } from '../constants/Fb';

/* eslint-disable import/prefer-default-export*/

export function checkFbStatus() {
  return (dispatch) => {
    if (global.isFBLoaded) {
      dispatch({
        type: FB_LOADED,
      });
    }

    setTimeout(() => {
      if (global.isFBLoaded) {
        dispatch({
          type: FB_LOADED_SUCCESS,
        });
      } else {
        dispatch({
          type: FB_LOADED_FAIL,
        });
      }
    }, 300);
  };
}
/* eslint-enable import/prefer-default-export*/
