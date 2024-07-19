import { ADD_CATEGORY_TYPES, ERROR_CATEGORY_TYPE } from "./actionTypes"

const initialState = {
    categoryTypes: [],
    errorType: false,
}

export const categoryTypesReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_CATEGORY_TYPES: return {...state, categoryTypes: payload}
        case ERROR_CATEGORY_TYPE: return {categoryTypes: [], error: true}
        default: return state
    }
}