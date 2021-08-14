import { combineReducers } from "redux";
import { favoriteReducer } from "./favoriteReducer";
import { savedReducer } from "./savedReducer";

//combine reducers
const reducers = combineReducers({
  favoritesHotel: favoriteReducer,
  savedHotel: savedReducer,
});

export default reducers;
