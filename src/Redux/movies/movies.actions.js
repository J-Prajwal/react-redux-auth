import axios from "axios";
import * as types from "./movies.actionTypes";

let timeoutId;

export const getMovies = (movieName) => async (dispatch) => {
  dispatch({ type: types.GET_MOVIES_LOADING });

  clearTimeout(timeoutId);

  timeoutId = setTimeout(async () => {
    try {
      const url = movieName
        ? `http://localhost:8080/movies?q=${movieName}`
        : "http://localhost:8080/movies";

      const res = await axios.get(url);
      dispatch({ type: types.GET_MOVIES_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: types.GET_MOVIES_ERROR });
    }
  }, 1000);
};
