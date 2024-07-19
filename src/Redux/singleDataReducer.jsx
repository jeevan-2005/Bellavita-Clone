import {
  ERROR_SINGLE_PRODUCT,
  FETCH_SINGLE_PRODUCT,
  LOADING_SINGLE_PRODUCT,
} from "./actionTypes";

const initialState = {
  loading: true,
  singleData: {},
  errorSingleData: false,
};

export const singleDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_SINGLE_PRODUCT:
      return { ...state, loading: true };
    case FETCH_SINGLE_PRODUCT:
      return {
        ...state,
        loading: false,
        singleData: { ...state.singleData, ...payload },
        error: false,
      };
    case ERROR_SINGLE_PRODUCT:
      return { loading: false, singleData: {}, errorSingleData: true };
    default:
      return state;
  }
};
