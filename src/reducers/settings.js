import { LOGOUT } from '../constants/Settings';

const initialState = {
  user: {
    id: null,
    name: '',
  },
};

export default function settings(state = initialState, action) {
  switch (action.type) {

    case LOGOUT:
      return { ...state, initialState };

    default:
      return state;
  }
}
