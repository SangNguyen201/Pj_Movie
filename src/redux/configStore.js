import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducer/CarouselReducer";
import { ManageMovieReducer } from "../redux/reducer/ManageMovieReducer";
import { ManageRapReducer } from "../redux/reducer/ManageRapReducer";
const rootReducer = combineReducers({
  //state ứng dụng
  CarouselReducer,
  ManageMovieReducer,
  ManageRapReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
