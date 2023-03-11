import * as types from "./movies.actionTypes";

const initState = {
  loading: false,
  error: false,
  movies: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_MOVIES_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.GET_MOVIES_SUCCESS: {
      return { ...state, loading: false, error: false, movies: payload };
    }
    case types.GET_MOVIES_ERROR: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
};
