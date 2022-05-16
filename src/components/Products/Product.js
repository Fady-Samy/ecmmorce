import React, { Fragment } from "react";

import {
  Icon,
  Icons,
  Image,
  ProductItem,
  Info,
  ProductName,
  ProductPrice
} from "./ProductsStyled";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { Skeleton } from "@mui/material";

import { NavLink } from "../../GlobalStyles";

export const Product = ({ product, dispatch }) => {
  return (
    <ProductItem>
      {product
        ? <Fragment>
            <NavLink to={`/product/${product.id}`}>
              <Image src={product.img} />
            </NavLink>

            <Info>
              <ProductName>
                {product.name}
              </ProductName>

              <ProductPrice>
                EGP {product.price}
              </ProductPrice>
            </Info>

            <Icons>
              <Icon>
                <FavoriteBorderOutlined />
              </Icon>
            </Icons>
          </Fragment>
        : <Skeleton
            variant="rectangular"
            width={280}
            height={300}
            animation="wave"
          />}
    </ProductItem>
  );
};
