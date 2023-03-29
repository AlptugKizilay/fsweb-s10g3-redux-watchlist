import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer"
import movieReducer from "./movieReducer";


const reducers = combineReducers({
  movieState: movieReducer,
  favoriteState: favoriteReducer,
});
export default reducers;
