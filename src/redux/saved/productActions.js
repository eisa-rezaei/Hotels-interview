import { ActionTypes } from "./action-types";

//always returns an object

export const setSaved = (products) => {
  return {
    type: ActionTypes.SET_SAVED, //type of action
    payload: products, //products that we are passing in
  };
};
export const removeSaved = (products) => {
  return {
    type: ActionTypes.REMOVE_SAVED, //type of action
    payload: products, //products that we are passing in
  };
};
