import { combineReducers } from "redux";

import products from "./productsReducer";
import users from "./usersReducer";
import authedUser from "./authedUserReducer";
import cart from "./cartReducer";

import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  products,
  users,
  authedUser,
  cart,

  loadingBar: loadingBarReducer
});
