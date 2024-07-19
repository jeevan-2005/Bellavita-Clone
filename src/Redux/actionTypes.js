import axios from "axios";

export const LOADING_CATEGORY = "category/loading";
export const FETCH_SUCCESS_CATEGORY = "category/fetchSuccess";
export const ERROR_CATEGORY = "category/error";

export const LOADING_PRODUCT = "product/loading";
export const FETCH_SUCCESS_PRODUCT = "product/fetchSuccess";
export const ERROR_PRODUCT = "product/error";

export const FETCH_SINGLE_PRODUCT = "singleProduct/fetch";
export const LOADING_SINGLE_PRODUCT = "singleProduct/loading";
export const ERROR_SINGLE_PRODUCT = "singleProduct/erro";

export const ADD_TO_CART = "cart/addToCart";
export const DELETE_FROM_CART = "cart/deleteFromCart";
export const EDIT_QUANTITY = "cart/editQuantity";
export const UPDATE_TOTAL = "cart/updateTotal";
export const ERROR_CART = "cart/error";

export const HANDLE_LOGIN = 'login';
export const HANDLE_LOGOUT = 'logout';
export const LOADING_LOGIN = 'login/loading';
export const ERROR_LOGIN = 'login/error';

export const ADD_CATEGORY_TYPES = "categoryType/types";
export const ERROR_CATEGORY_TYPE = "categoryType/error";

export const fetchCategoriesData = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_CATEGORY });
    axios
      .get("https://dummyjson.com/products?limit=4")
      .then((res) =>
        dispatch({ type: FETCH_SUCCESS_CATEGORY, payload: res.data.products })
      )
      .catch(() => dispatch({ type: ERROR_CATEGORY }));
  } catch (error) {
    dispatch({ type: ERROR_CATEGORY });
  }
};

export const fetchProductsData = (url) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_PRODUCT });
    axios
      .get(url)
      .then((res) =>
        dispatch({
          type: FETCH_SUCCESS_PRODUCT,
          payload: res.data.products,
        })
      )
      .catch(() => dispatch({ type: ERROR_PRODUCT }));
  } catch (error) {
    dispatch({ type: ERROR_PRODUCT });
  }
};

export const fetchSingleProductData = (url) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_SINGLE_PRODUCT });
    axios
      .get(url)
      .then((res) =>
        dispatch({
          type: FETCH_SINGLE_PRODUCT,
          payload: res.data,
        })
      )
      .catch(() => dispatch({ type: ERROR_SINGLE_PRODUCT }));
  } catch (error) {
    dispatch({ type: ERROR_SINGLE_PRODUCT });
  }
};




export const fetchCartItem = (id) => async (dispatch) => {
  try {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => dispatch({ type: ADD_TO_CART, payload: res.data }))
      .catch(() => dispatch({ type: ERROR_CART }));
  } catch (error) {
    dispatch({ type: ERROR_CART });
  }
};

export const fetchCategories = (url) => async (dispatch) => {
  try {
    axios
      .get(url)
      .then((res) => dispatch({ type: ADD_CATEGORY_TYPES, payload: res.data }))
      .catch(() => dispatch({ type: ERROR_CATEGORY_TYPE }));
  } catch (error) {
    dispatch({ type: ERROR_CATEGORY_TYPE });
  }
};

export const fetchLoginDetails = (data) => async (dispatch) => {
  dispatch({type: LOADING_LOGIN})
  try {
    axios.post('https://reqres.in/api/login', data)
    .then((res) => dispatch({type: HANDLE_LOGIN, payload: res.data.token}))
    .catch(() => dispatch({type: ERROR_LOGIN, payload:"please fill correct credentials"}))
  } catch (error) {
    dispatch({type: ERROR_LOGIN, payload: "please fill correct credentials"})
  }
}