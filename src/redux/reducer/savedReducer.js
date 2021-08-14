import { ActionTypes } from "../contant/action-types";

const savedInitialState = [];

export const savedReducer = (state = savedInitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SAVED:
      const newState = state.concat(...state, payload);
      return {
        ...state,
        newState,
      };
    case ActionTypes.REMOVE_SAVED:
      const newState = state.filter((item) => item.id !== payload.id);
      return {
        newState,
      };
    default:
      return state;
  }
};
