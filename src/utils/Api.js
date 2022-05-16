import {
  _getUsers,
  _getPopularProducts,
  _saveLikeToggle,
  _addToCart
} from "./Data.js";

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getPopularProducts()
  ]).then(([users, products]) => ({
    users,
    products
  }));
}

export function getPopularProducts(productsType) {
  return Promise.resolve(_getPopularProducts(productsType)).then(products => ({
    products
  }));
}

export function addProductToCart(product) {
  return Promise.resolve(_addToCart(product)).then(cartProducts => ({
    cartProducts
  }));
}
// export function saveLikeToggle(info) {
//   return _saveLikeToggle(info);
// }
