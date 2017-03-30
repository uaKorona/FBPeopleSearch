import { LOGIN_SUCCESS, LOGOUT } from '../constants/User';

const initialUserState = {
  id: null,
  name: '',
  isNotAuthenticated: true,
};

export default function user(state = initialUserState, action) {
  switch (action.type) {

    case LOGIN_SUCCESS: {
      const { id, name } = action.payload;
      return {
        ...state,
        id,
        name,
        isNotAuthenticated: false,
      };
    }

    case LOGOUT:
      return { ...state, initialUserState, isNotAuthenticated: true };

    default:
      return state;
  }
}
