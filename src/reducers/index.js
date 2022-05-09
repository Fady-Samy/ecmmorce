import { combineReducers } from "redux";

import products from "./productsReducer";
import users from "./usersReducer";
import authedUser from "./authedUserReducer";

import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  products,
  users,
  authedUser,

  loadingBar: loadingBarReducer
});
