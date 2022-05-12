import React, { useState } from "react";

import {
  OverlaySection,
  Icon,
  Icons,
  Image,
  ProductItem,
  Info,
  ProductName,
  ProductPrice,
  ActionsContainer
} from "./ProductsStyled";
import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Alert, Button, IconButton, Skeleton, Snackbar } from "@mui/material";

import { NavLink } from "../../GlobalStyles";
import CloseIcon from "@mui/icons-material/Close";

export const Product = ({ product }) => {
  const [open, setOpen] = useState(false);

  const AddToCart = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const snackActions = (
    <ActionsContainer>
      <Button style={{ color: "white" }} size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon
          style={{
            fontSize: "small"
          }}
        />
      </IconButton>
    </ActionsContainer>
  );

  return (
    <ProductItem>
      {product
        ? <NavLink
            to={`/product/${product.id}`}
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Image src={product.img} />
          </NavLink>
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
                width={50}
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
            <Icon onClick={AddToCart}>
              <ShoppingCartOutlined />
            </Icon>

            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Icons>}
      </OverlaySection>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        // action={snackActions}
      >
        <Alert
          severity="success"
          variant="filled"
          elevation={6}
          // onClose={handleClose}
          action={snackActions}
        >
          item added to your cart
        </Alert>
      </Snackbar>
    </ProductItem>
  );
};
