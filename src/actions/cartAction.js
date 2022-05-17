import { cartItems } from "../data/CartData";

export const ADD_TO_CART = "ADD_TO_CART";

function addToCart(cartProducts) {
  return {
    type: ADD_TO_CART,
    cartProducts
  };
}

export function handleAddToCart(
  product,
  selectedColor,
  selectedSize,
  quantity
) {
  return (dispatch, getState) => {
    let alreadyExist = false;
    let index = null;

    //Check Cart is not empty
    if (cartItems.length != 0) {
      //Check if product with same id exist
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id == product.id) {
          //if Size and color are the same
          if (
            cartItems[i].selectedSize == selectedSize &&
            cartItems[i].selectedColor == selectedColor
          ) {
            alreadyExist = true;
            index = i;
          }
        }
      }
    }

    if (alreadyExist) {
      //Update only quantity
      cartItems[index].quantity = cartItems[index].quantity + quantity;
      dispatch(addToCart({ cartProducts: cartItems }));
    } else {
      //New item
      //add the selected color, size, quantity to the product object (new object Item)
      let item = {
        ...product,
        selectedColor: selectedColor,
        selectedSize: selectedSize,
        quantity: quantity
      };
      // Then add to cartItems
      cartItems.push(item);
      dispatch(addToCart({ cartProducts: cartItems }));
    }
  };
}

export function handleQuantityChange(productId, color, size, newQuantity) {
  console.log("new quantity");
  console.log(newQuantity);
  return (dispatch, getState) => {
    let index = null;
    //get product from cart with the id,color,size to change
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id == productId) {
        //if Size and color are the same
        if (
          cartItems[i].selectedSize == size &&
          cartItems[i].selectedColor == color
        ) {
          index = i;
        }
      }
    }

    if (newQuantity == 0) {
      console.log("will remove");
      //remove product from cart
      cartItems.splice(index, 1);
      dispatch(addToCart({ cartProducts: cartItems }));
    } else {
      console.log("will decrease");
      cartItems[index].quantity = newQuantity;
      dispatch(addToCart({ cartProducts: cartItems }));
    }
  };
}
