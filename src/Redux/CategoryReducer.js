import {
  ERROR_CATEGORY,
  FETCH_SUCCESS_CATEGORY,
  LOADING_CATEGORY,
} from "./actionTypes";

const initialState = {
  loading: true,
  categories: [],
  error: false,
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_CATEGORY:
      return { ...state, loading: true };
    case FETCH_SUCCESS_CATEGORY:
      return { loading: false, categories: payload, error: false };
    case ERROR_CATEGORY:
      return { loading: false, categories: [], error: true };
    default:
      return state;
  }
};
