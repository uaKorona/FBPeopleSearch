import { FB_LOADED, FB_LOADED_SUCCESS, FB_LOADED_FAIL } from '../constants/Fb';
import fb from '../utils/facebookWrapper';

/* eslint-disable import/prefer-default-export*/

export function checkFbStatus() {
  return (dispatch) => {
    dispatch({
      type: FB_LOADED,
    });

    fb.initCore().then(
      () => {
        setTimeout(() => {
          dispatch({
            type: FB_LOADED_SUCCESS,
          });
        }, 0);
      },
      () => {
        dispatch({
          type: FB_LOADED_FAIL,
        });
      },
    );
  };
}
/* eslint-enable import/prefer-default-export*/
