import { LOGOUT } from '../constants/User';

const initialUserState = {
  id: null,
  name: '',
  isNotAuthenticated: false,
};

export default function user(state = initialUserState, action) {
  switch (action.type) {

    case LOGOUT:
      return { ...state, initialUserState, isNotAuthenticated: true };

    default:
      return state;
  }
}
