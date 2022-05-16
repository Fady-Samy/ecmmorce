import React, { Component, Fragment } from "react";
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
class CartView extends Component {
  render() {
    const { cartProducts } = this.props;

    return (
      <Container>
        <Title>YOUR BAG</Title>
        {/* Top */}
        <FirstRow>
          <Button>CONTINUE SHOPPING</Button>
          <GoTo>Your Wishlist (0)</GoTo>
        </FirstRow>

        {cartProducts
          ? //Bottom part
            <CartProductItems cartProducts={cartProducts} />
          : <h1>Cart Is Empty</h1>}
      </Container>
    );
  }
}

//Getting the cart data from the state
function mapStateToProps({ cart }) {
  let cartProducts = cart.cartProducts;
  return {
    cartProducts: cartProducts
  };
}

export default connect(mapStateToProps)(CartView);

export const CartProductItems = ({ cartProducts }) => {
  const summary = [
    {
      text: "Subtotal",
      price: "80"
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
      price: "80"
    }
  ];
  return (
    <ProductSummaryContainer>
      {/* Info */}
      <OrderProducts>
        {cartProducts.map((product, inedx) =>
          <Fragment>
            <Product>
              <ProductDetails>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.name}
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> {product.id}
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> 37
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Icon>
                    <Remove />
                  </Icon>
                  <ProductAmount>1</ProductAmount>
                  <Icon>
                    <Add />
                  </Icon>
                </ProductAmountContainer>
                <ProductPrice>
                  ${product.price}
                </ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
          </Fragment>
        )}
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
                $ {item.price}
              </SummaryItemPrice>
            </SummaryItem>
          );
        })}
        <Button type="checkout">Checkout Now</Button>
      </OrderSummary>
    </ProductSummaryContainer>
  );
};
