import { RECEIVE_PRODUCTS, EMPTY_PRODUCTS } from "../actions/productsAction";

export default function products(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...action.products
      };
    case EMPTY_PRODUCTS:
      return {};
    // case TOGGLE_TWEET:
    //   return {
    //     ...state,
    //     [action.id]: {
    //       ...state[action.id],
    //       likes:
    //         action.hasLiked === true
    //           ? state[action.id].likes.filter(uid => uid !== action.authedUser)
    //           : state[action.id].likes.concat([action.authedUser])
    //     }
    //   };
    // case ADD_TWEET:
    //   const { tweet } = action;

    //   let replyingTo = {};

    //   if (tweet.replyingTo !== null) {
    //     replyingTo = {
    //       [tweet.replyingTo]: {
    //         ...state[tweet.replyingTo],

    //         replies: state[tweet.replyingTo].replies.concat([tweet.id])
    //       }
    //     };
    //   }

    //   return {
    //     ...state,

    //     [action.tweet.id]: action.tweet,

    //     ...replyingTo
    //   };
    default:
      return state;
  }
}
