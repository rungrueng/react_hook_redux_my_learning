import { combineReducers } from "redux";
//import { reducer as reduxform } from "redux-form";
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
    orders : OrderReducer,
    products : ProductReducer,
    //form : reduxform
});

export default rootReducer;