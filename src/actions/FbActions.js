import { FB_LOADED, FB_LOADED_SUCCESS, FB_LOADED_FAIL } from '../constants/Fb';
import fb from '../utils/facebookWrapper';

/* eslint-disable import/prefer-default-export*/

export function checkFbStatus() {
  return (dispatch) => {

    dispatch({
      type: FB_LOADED,
    });

    fb.initCore().then(() => {
        if (global.isFBLoaded) {
          dispatch({
            type: FB_LOADED_SUCCESS,
          });
        } else {
          dispatch({
            type: FB_LOADED_FAIL,
          });
        }

    },
      () => console.log(LOGIN_FAIL),
    );



  };
}
/* eslint-enable import/prefer-default-export*/
