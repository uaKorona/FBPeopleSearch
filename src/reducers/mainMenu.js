import { GOTO_SETTINGS } from '../constants/MainMenu';

const initialState = {};

export default function mainMenuState(state = initialState, action) {
  switch (action.type) {

    case GOTO_SETTINGS:
      return { ...state, name: action.payload.name };

    default:
      return state;
  }
}
