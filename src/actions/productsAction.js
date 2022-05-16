import { showLoading, hideLoading } from "react-redux-loading";
import { getPopularProducts } from "../utils/Api";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const EMPTY_PRODUCTS = "EMPTY_PRODUCTS";

//action creator (elly event elly bygeblna el products)
export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products
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

export function emptyProducts() {
  return {
    type: EMPTY_PRODUCTS
  };
}

// export function toggleTweet({id,authedUser,hasLiked}){
//     return{
//         type: TOGGLE_TWEET,
//         id,
//         authedUser,
//         hasLiked
//     }
// }

// export function handleToggleTweet (info){
//     //[48]
//     return (dispatch) => {
//         dispatch(toggleTweet(info))
//         //[49]
//         return saveLikeToggle(info)
//         .catch((e) => {
//             console.warn('Error in handleToggleTweet',e)
//             //[50]
//             dispatch(toggleTweet(info))
//             alert('There was an error liking the tweet. try again')
//         })
//     }
// }

// //[57]
// function addTweet(tweet){
//     return{
//         type: ADD_TWEET,
//         tweet
//     }
// }

// //[58]
// export function handleAddTweet (text,replyingTo){
//     return(dispatch,getState) =>{
//         const {authedUser} = getState()

//         //show loading
//         dispatch(showLoading())
//         //making the API Request
//         return saveTweet({
//             text,
//             author: authedUser,
//             replyingTo
//         })
//         .then((tweet)=>dispatch(addTweet(tweet)))
//         .then(()=>dispatch(hideLoading()))

//     }
// }
