import { ActionTypes } from "../contant/action-types";

const favoriteInitialState = [];

export const favoriteReducer = (
  state = favoriteInitialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_FAVORITE:
      return {
        ...state,
        store: payload,
      };
    case ActionTypes.REMOVE_FAVORITE:
      const newState = state.filter((item) => item.id !== payload.id);
      return {
        newState,
      };
    default:
      return state;
  }
};
