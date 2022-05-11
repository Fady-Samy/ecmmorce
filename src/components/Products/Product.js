import React from "react";

import { HoverButtons, Icon, Image, ProductItem } from "./ProductsStyled";
import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

export const Product = ({ product }) => {
  return (
    <ProductItem>
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
    </ProductItem>
  );
};
