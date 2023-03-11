import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as appReducer } from "./app/app.reducer";
import thunk from "redux-thunk";
import { reducer as moviesReducer } from "./movies/movies.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  movies: moviesReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
