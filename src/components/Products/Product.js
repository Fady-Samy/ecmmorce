import React, { Fragment, useState } from "react";

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
import { FavoriteBorderOutlined, VisibilityRounded } from "@mui/icons-material";
import { Alert, Button, IconButton, Skeleton, Snackbar } from "@mui/material";

import { NavLink } from "../../GlobalStyles";
import CloseIcon from "@mui/icons-material/Close";
import { handleAddToCart } from "../../actions/cartAction";

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
