import { ActionTypes } from "./action-types";

const savedInitialState = [];

export const savedReducer = (state = savedInitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SAVED:
      return [...state, payload];
    case ActionTypes.REMOVE_SAVED:
      const newState2 = state.filter((item) => item.id !== payload.id);
      return [newState2];
    default:
      return state;
  }
};
