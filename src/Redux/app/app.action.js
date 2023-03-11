// yogi ji
import axios from "axios";
import * as types from "./app.actionTypes";

export const getData = (args) => async (dispatch) => {
  dispatch({ type: types.GET_DATA_LOADING });

  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: types.GET_DATA_ERROR });
  }
};
