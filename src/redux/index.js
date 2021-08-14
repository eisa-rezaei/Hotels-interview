import { combineReducers } from "redux";
import { favoriteReducer } from "./favorites/favoriteReducer";
import { savedReducer } from "./saved/savedReducer";

//combine reducers
const reducers = combineReducers({
  favorites: favoriteReducer,
  saved: savedReducer,
});

export default reducers;
