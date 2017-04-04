import { FB_LOADED, FB_LOADED_SUCCESS, FB_LOADED_FAIL } from '../constants/Fb';

const initialState = {
  fbState: {
    loading: false,
    isLoaded: false,
  },
};

export default function fbState(state = initialState, action) {
  switch (action.type) {

    case FB_LOADED:
      return { ...state, fbState: { loading: true, isLoaded: false } };

    case FB_LOADED_SUCCESS:
      return { ...state, fbState: { loading: false, isLoaded: true } };

    case FB_LOADED_FAIL:
      return { ...state, initialState };

    default:
      return state;
  }
}
