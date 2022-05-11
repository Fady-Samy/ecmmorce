import React from "react";

import {
  OverlaySection,
  Icon,
  Icons,
  Image,
  ProductItem,
  Info,
  ProductName,
  ProductPrice
} from "./ProductsStyled";
import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

export const Product = ({ product }) => {
  return (
    <ProductItem>
      <Image src={product.img} />
      <OverlaySection>
        <Info>
          <ProductName>
            {product.name}
          </ProductName>
          <ProductPrice>
            $ {product.price}
          </ProductPrice>
        </Info>
        <Icons>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>

          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Icons>
      </OverlaySection>
    </ProductItem>
  );
};
