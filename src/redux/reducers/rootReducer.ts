import { combineReducers } from 'redux';
import { cartReducer } from "./cartSlice";

const appReducer = combineReducers({
    cart: cartReducer
});

export default appReducer;
