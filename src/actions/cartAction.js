import { addProductToCart } from "../utils/Api";

export const ADD_TO_CART = "ADD_TO_CART";

function addToCart(cartProducts) {
  return {
    type: ADD_TO_CART,
    cartProducts
  };
}

export function handleAddToCart(product, selectedColor, selectedSize) {
  return (dispatch, getState) => {
    // const { authedUser } = getState();

    //show loading
    // dispatch(showLoading());
    //making the API Request
    return addProductToCart(
      product,
      selectedColor,
      selectedSize
    ).then(cartProducts => dispatch(addToCart(cartProducts)));
  };
}
