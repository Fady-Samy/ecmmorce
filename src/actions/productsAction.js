// import {saveLikeToggle,saveTweet} from '../utils/api'
import { showLoading, hideLoading } from "react-redux-loading";

// export const TOGGLE_TWEET = 'TOGGLE_TWEET'
// export const ADD_TWEET = 'ADD_TWEET'
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

//action creator (elly event elly bygeblna el products)
export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products
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
