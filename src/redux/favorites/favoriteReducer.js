import { ActionTypes } from "./action-types";

const favoriteInitialState = {
  favorites: [],
};

export const favoriteReducer = (
  state = favoriteInitialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_FAVORITE:
      return { ...state, favorites: [...state.favorites, payload] };
    case ActionTypes.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== payload.id),
      };

    default:
      return state;
  }
};
