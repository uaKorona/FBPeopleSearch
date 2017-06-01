import { SEARCH, SEARCH_COMPLETED, SEARCH_RESET } from '../constants/people';

const initialState = {
  people: [],
  isSearchCompleted: true,
};

export default function people(state = initialState, action) {
  switch (action.type) {

    case SEARCH: {
      return {
        ...state,
        isSearchCompleted: false,
      };
    }

    case SEARCH_COMPLETED: {
      const { peopleList } = action.payload;
      return {
        ...state,
        isSearchCompleted: true,
        people: peopleList,
      };
    }

    case SEARCH_RESET:
      return { ...initialState };

    default:
      return state;
  }
}
