import {
  ERROR_PRODUCT,
  FETCH_SUCCESS_PRODUCT,
  LOADING_PRODUCT,
} from "./actionTypes";

const initialState = {
  loading: true,
  data: [],
  errorData: false,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_PRODUCT:
      return { ...state, loading: true };
    case FETCH_SUCCESS_PRODUCT:
      return {
        loading: false,
        data: payload,
        error: false,
      };
    case ERROR_PRODUCT:
      return {
        loading: false,
        data: [],
        error: true,
      };
    default:
      return state;
  }
};
