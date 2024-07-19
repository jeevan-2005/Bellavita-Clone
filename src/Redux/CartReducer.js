import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  EDIT_QUANTITY,
  ERROR_CART,
  UPDATE_TOTAL,
} from "./actionTypes";

let initialState = {
  cartProducts: [],
  error: false,
  total : 0,
};

const loadCartData = () => {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  initialState = { ...initialState, cartProducts: cartData, error: false };
};

const setCartData = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      let itemExists = false;
      const updatedCartProducts = state.cartProducts.map((cartItem) => {
        if (cartItem.item.id === payload.id) {
          itemExists = true;
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      if (!itemExists) {
        state = {
          ...state,
          cartProducts: [...state.cartProducts, { item: payload, quantity: 1 }],
        };
        setCartData(state.cartProducts);
        return state;
      }

      state = { ...state, cartProducts: updatedCartProducts };
      setCartData(state.cartProducts);
      return state;
    }
    case EDIT_QUANTITY: {
      const updatedCartProducts = state.cartProducts.map((cartItem) => {
        if (cartItem.item.id === payload.id) {
          return { ...cartItem, quantity: payload.quantity };
        }
        return cartItem;
      });

      state = { ...state, cartProducts: updatedCartProducts };
      setCartData(state.cartProducts);
      return state;
    }
    case DELETE_FROM_CART: {
      const updatedCartProducts = state.cartProducts.filter((cartItem) => {
        if (cartItem.item.id !== payload) {
          return cartItem;
        }
      });
      state = { ...state, cartProducts: updatedCartProducts };
      console.log(state.cartProducts);
      setCartData(state.cartProducts);
      return state;
    }
    case UPDATE_TOTAL: return {...state, total: payload}
    case ERROR_CART:
      return { ...state, error: true };
    default:
      return state;
  }
};

loadCartData();
