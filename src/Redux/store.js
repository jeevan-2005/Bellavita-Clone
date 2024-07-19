import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from 'redux-thunk'
import { categoryReducer } from "./CategoryReducer";
import { productReducer } from "./ProductsReducer";
import { cartReducer } from "./CartReducer";
import { categoryTypesReducer } from "./categoriesTypesReducer";
import { loginReducer } from "./loginReducer";
import { singleDataReducer } from "./singleDataReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    categoryType: categoryTypesReducer,
    login: loginReducer,
    singleProduct: singleDataReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));