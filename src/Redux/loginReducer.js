import {
  ERROR_LOGIN,
  HANDLE_LOGIN,
  HANDLE_LOGOUT,
  LOADING_LOGIN,
} from "./actionTypes";

let initialState = {
  isAuth: {
    Auth: false,
    token: "",
  },
  loading: false,
  error: "",
};

const setLogin = (flag) =>{
  localStorage.setItem('Auth', JSON.stringify(flag));
}

const loadLogin = ()=>{
  let flag = JSON.parse(localStorage.getItem('Auth'));
  initialState = {...initialState, isAuth: {...initialState.isAuth, Auth: flag}};
}

loadLogin();

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_LOGIN:{
      setLogin(true);
      return {
        ...state,
        isAuth: { ...state.isAuth, Auth: true, token: payload },
        loading: false,
      };}
    case LOADING_LOGIN:
      return { ...state, loading: true };
    case ERROR_LOGIN:{
      setLogin(false);
      return {
        isAuth: {
          Auth: false,
          token: "",
        },
        loading: false,
        error: payload,
      };}
    case HANDLE_LOGOUT:
      return {
        isAuth: {
          Auth: false,
          token: "",
        },
        loading: false,
        error: "",
      };
    default:
      return state;
  }
};
