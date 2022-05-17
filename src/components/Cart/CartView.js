import React, { Component, Fragment, useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import {
  Button,
  ProductColor,
  Container,
  Details,
  FirstRow,
  GoTo,
  ProductId,
  Image,
  Icon,
  ProductName,
  OrderProducts,
  OrderSummary,
  PriceDetails,
  Product,
  ProductDetails,
  ProductSummaryContainer,
  ProductSize,
  Title,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  SummaryTitle
} from "./CartViewStyled";

import { connect } from "react-redux";
import { handleQuantityChange } from "../../actions/cartAction";
class CartView extends Component {
  render() {
    const { cartProductsLenght, cartProducts, dispatch } = this.props;
    return (
      <Container>
        <Title>YOUR BAG</Title>
        {/* Top */}
        <FirstRow>
          <Button>CONTINUE SHOPPING</Button>
          <GoTo>Your Wishlist (0)</GoTo>
        </FirstRow>

        {cartProductsLenght != 0
          ? //Bottom part
            <CartProductItems cartProducts={cartProducts} dispatch={dispatch} />
          : <h1>Cart Is Empty</h1>}
      </Container>
    );
  }
}

//Getting the cart data from the state
function mapStateToProps({ cart }) {
  let cartProducts = cart.cartProducts;
  //Added cartProductsLenght so that when we remove items from cart rerender the view as the length changes not only when cartProducts changes as object
  return {
    cartProductsLenght: cartProducts.length,
    cartProducts: cartProducts
  };
}

export default connect(mapStateToProps)(CartView);

export const CartProductItems = ({ cartProducts, dispatch }) => {
  // const [subtotal, setSubtotal] = useState(0);
  let subTotal = 0;
  const [quantity, setQuantity] = useState(1);
  let newQuantity = null;

  const handleQuantity = (type, productId, color, size, oldQuantity) => {
    if (type === "add") {
      newQuantity = oldQuantity + 1;
      dispatch(handleQuantityChange(productId, color, size, newQuantity));
      //to re-render componet
      setQuantity(newQuantity);
    } else {
      newQuantity = oldQuantity - 1;

      dispatch(handleQuantityChange(productId, color, size, newQuantity));
      setQuantity(newQuantity);
    }
  };

  const summary = [
    {
      text: "Subtotal",
      price: ""
    },
    {
      text: "Estiamted Shipping",
      price: "5.90"
    },
    {
      text: "Shipping Discount",
      price: "-5.90"
    },
    {
      text: "Total",
      price: ""
    }
  ];
  return (
    <ProductSummaryContainer>
      {/* Info */}
      <OrderProducts>
        {cartProducts.map((product, inedx) => {
          subTotal += product.price * product.quantity;
          return (
            <Fragment>
              <Product>
                {/* Product Info */}
                <ProductDetails>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.name}
                    </ProductName>
                    <ProductId>
                      <b>Id:</b> {product.id}
                    </ProductId>
                    <ProductColor color={product.selectedColor} />
                    <ProductSize>
                      <b>Size:</b> {product.selectedSize}
                    </ProductSize>
                  </Details>
                </ProductDetails>
                {/* Product Price and Quantity */}
                <PriceDetails>
                  <ProductAmountContainer>
                    <Icon>
                      <Remove
                        onClick={() =>
                          handleQuantity(
                            "remove",
                            product.id,
                            product.selectedColor,
                            product.selectedSize,
                            product.quantity
                          )}
                      />
                    </Icon>
                    <ProductAmount>
                      {product.quantity}
                    </ProductAmount>
                    <Icon>
                      <Add
                        onClick={() =>
                          handleQuantity(
                            "add",
                            product.id,
                            product.selectedColor,
                            product.selectedSize,
                            product.quantity
                          )}
                      />
                    </Icon>
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.price * product.quantity}
                  </ProductPrice>
                </PriceDetails>
              </Product>
              <Hr />
            </Fragment>
          );
        })}
      </OrderProducts>
      {/* Summary */}
      <OrderSummary>
        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
        {summary.map((item, index) => {
          return (
            <SummaryItem
              key={index}
              type={
                item.text.toString().toLowerCase() === "total" ? "total" : ""
              }
            >
              <SummaryItemText>
                {item.text}
              </SummaryItemText>
              <SummaryItemPrice>
                ${" "}
                {item.text.toString().toLowerCase() === "total"
                  ? subTotal - 5.9
                  : item.text.toString().toLowerCase() === "subtotal"
                    ? subTotal
                    : item.price}
              </SummaryItemPrice>
            </SummaryItem>
          );
        })}
        <Button type="checkout">Checkout Now</Button>
      </OrderSummary>
    </ProductSummaryContainer>
  );
};
