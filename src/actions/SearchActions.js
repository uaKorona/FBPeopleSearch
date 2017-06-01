import fb from '../utils/facebookWrapper';
import { SEARCH, SEARCH_COMPLETED } from '../constants/people';

export function search(searchText) {
  return (dispatch) => {
    dispatch({
      type: SEARCH,
    });


    fb.search(searchText).then((peopleList) => {
      dispatch({
        type: SEARCH_COMPLETED,
        payload: {
          peopleList,
        },
      });
    });
  };
}

export function resetSearch() {

}
