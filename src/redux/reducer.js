import { ADD_TO_FAVORITES, VIEW_FAVORITES } from './actions';

const initialState = {
  favoriteFacts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteFacts: [...state.favoriteFacts, action.payload],
      };
    case VIEW_FAVORITES:
      return state;
    default:
      return state;
  }
};

export default reducer;
