// modiji

import * as types from "./app.actionTypes";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_DATA_LOADING:
      return { ...state, loading: true, error: false };

    case types.GET_DATA_SUCCESS:
      return { ...state, loading: false, error: false, data: payload };

    case types.GET_DATA_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
