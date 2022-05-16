import { ADD_TO_CART } from "../actions/cartAction";

export default function cart(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const { cartProducts } = action;

      return {
        ...state,
        ...cartProducts
      };
    default:
      return state;
  }
}
