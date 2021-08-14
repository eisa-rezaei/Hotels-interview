import { ActionTypes } from "../contant/action-types";

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
