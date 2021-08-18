import { ActionTypes } from "./action-types";

const savedInitialState = {
  saved: [],
};

export const savedReducer = (state = savedInitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SAVED:
      return { ...state, saved: [...state.saved, payload] };
    case ActionTypes.REMOVE_SAVED:
      return {
        ...state,
        saved: state.saved.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};
