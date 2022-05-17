import { combineReducers } from "redux";
import { products } from "./products";
import { users } from "./users";
import { loadingBarReducer } from "react-redux-loading";
import { authedUser } from "./authedUser";

export default combineReducers({
    authedUser,
    products,
    users,
    loadingBar: loadingBarReducer,
})