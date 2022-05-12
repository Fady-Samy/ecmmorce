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
import { Skeleton } from "@mui/material";

export const Product = ({ product }) => {
  return (
    <ProductItem>
      {product
        ? <Image src={product.img} />
        : <Skeleton
            variant="rectangular"
            width={300}
            height={350}
            animation="wave"
          />}

      <OverlaySection>
        <Info>
          {product
            ? <ProductName>
                {product.name}
              </ProductName>
            : <Skeleton
                variant="text"
                width={20}
                height={10}
                sx={{ bgcolor: "white" }}
              />}

          {product
            ? <ProductPrice>
                $ {product.price}
              </ProductPrice>
            : <Skeleton
                variant="text"
                width={20}
                height={10}
                sx={{ bgcolor: "white" }}
              />}
        </Info>
        {product &&
          <Icons>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>

            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Icons>}
      </OverlaySection>
    </ProductItem>
  );
};
