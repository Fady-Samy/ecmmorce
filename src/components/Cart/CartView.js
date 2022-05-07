import { Add, Remove } from "@mui/icons-material";

import React from "react";
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

export const CartView = () => {
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
    <Container>
      <Title>YOUR BAG</Title>
      {/* Top */}
      <FirstRow>
        <Button>CONTINUE SHOPPING</Button>
        <GoTo>Your Wishlist (0)</GoTo>
      </FirstRow>

      {/* Bottom */}
      <ProductSummaryContainer>
        {/* Info */}
        <OrderProducts>
          <Product>
            <ProductDetails>
              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
              <Details>
                <ProductName>
                  <b>Product:</b> JESSIE THUNDER SHOES
                </ProductName>
                <ProductId>
                  <b>Id:</b> 94545645
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
              <ProductPrice>$30</ProductPrice>
            </PriceDetails>
          </Product>
          <Hr />
        </OrderProducts>
        {/* Summary */}
        <OrderSummary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          {summary.map((item, index) => {
            return (
              <SummaryItem
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
    </Container>
  );
};
