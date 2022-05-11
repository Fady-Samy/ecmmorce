import { getInitialData, getPopularProducts } from "../utils/Api";
import { receiveProducts } from "../actions/productsAction";
import { receiveUsers } from "../actions/usersAction";
import { setAuthedUser } from "../actions/authedUserAction";

import { showLoading, hideLoading } from "react-redux-loading";

//AUTHED USER FOR NOW ALWYAS USER1
const AUTHED_ID = "user1";

//Dah action creator bardo bas el mafrood e7na 3arfen en el action creator by return object elly hwa el action (zai file autheUser kda wel ba2y)enama hna mraga3 function w dah 3ashan hna
//m7tagen el action creator dah ye3mel request lel api
// w 3ashan el action creator dah yt2ebel kda bma enno by return function mesh object bn7tag el thunk (elly hwa el middleware)
export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    //Getting the users and products from api
    return getInitialData().then(({ users, products }) => {
      //Then with the reducer we put the data in the state
      dispatch(receiveProducts(products));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

export function handleProductsData(productsType) {
  return dispatch => {
    //Getting the products data from api
    return getPopularProducts(productsType).then(products => {
      // console.log("check 2 ");
      // console.log(products);
      //Then with the reducer we put the data in the state
      dispatch(receiveProducts(products));
    });
  };
}
