import { Button } from "@mui/material";
import React from "react";
import { products } from "../../data/ProductsData";
import {
  Container,
  HoverButtons,
  Icon,
  Image,
  Product
} from "./ProductsStyled";

import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

import { NavLink } from "../../GlobalStyles";

export const Products = () => {
  return (
    <Container>
      {products.map((product, index) => {
        return (
          <NavLink to="/product">
            <Product key={index}>
              <Image src={product.img} />
              <HoverButtons>
                <Icon>
                  <ShoppingCartOutlined />
                </Icon>
                <Icon>
                  <SearchOutlined />
                </Icon>
                <Icon>
                  <FavoriteBorderOutlined />
                </Icon>
              </HoverButtons>
            </Product>
          </NavLink>
        );
      })}
    </Container>
  );
};
