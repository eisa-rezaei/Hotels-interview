import { ActionTypes } from "./action-types";

//always returns an object

export const setFavorite = (products) => {
  return {
    type: ActionTypes.SET_FAVORITE, //type of action
    payload: products, //products that we are passing in
  };
};
export const removeFavorite = (products) => {
  return {
    type: ActionTypes.REMOVE_FAVORITE, //type of action
    payload: products, //products that we are passing in
  };
};
