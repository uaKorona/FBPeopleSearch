import { FB_LOADED, FB_LOADED_SUCCESS, FB_LOADED_FAIL } from '../constants/Fb';
import fb from '../utils/facebookWrapper';
import { getUserStatus } from './UserActions';

/* eslint-disable import/prefer-default-export*/

export function checkFbStatus() {
  return (dispatch) => {
    dispatch({
      type: FB_LOADED,
    });

    fb.initCore().then(
      () => {
        dispatch({
          type: FB_LOADED_SUCCESS,
        });

        dispatch(getUserStatus());
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
