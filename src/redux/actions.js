export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const VIEW_FAVORITES = 'VIEW_FAVORITES';

export const addToFavorites = (fact) => ({
  type: ADD_TO_FAVORITES,
  payload: fact,
});

export const viewFavorites = () => ({
  type: VIEW_FAVORITES,
});
