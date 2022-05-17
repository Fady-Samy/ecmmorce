import { Add, Remove } from "@mui/icons-material";
import React, { Component, useState } from "react";
import {
  AddButton,
  ActionsContainer,
  Container,
  Description,
  Filter,
  FilterColor,
  FiltersContainer,
  FilterText,
  Icon,
  Image,
  Name,
  Price,
  ProductImageContainer,
  ProductInfoContainer,
  Select,
  Option,
  AddToCartContainer,
  QuantityContainer,
  Quantity
} from "./ProductViewStyled";

import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { handleAddToCart } from "../../actions/cartAction";

import { connect } from "react-redux";

class ProductView extends Component {
  render() {
    const { selectedProduct, dispatch } = this.props;

    // console.log("Dispatch recieved");
    // console.log(dispatch);

    return (
      <FuncProductView selectedProduct={selectedProduct} dispatch={dispatch} />
    );
  }
}
function mapStateToProps({ products }, props) {
  //Getting the product with the id from URL using useParams Hook to view
  let productsArray = products.products;
  let selectedProduct;
  // console.log("check id");
  // console.log(props.useParams.id);
  if (productsArray) {
    for (let i = 0; i < productsArray.length; i++) {
      if (productsArray[i].id == props.useParams.id) {
        selectedProduct = productsArray[i];
        break;
      }
    }
  }

  // console.log("found");
  // console.log(selectedProduct);

  return {
    selectedProduct: selectedProduct,
    useParams: props.useParams
  };
}

export default connect(mapStateToProps)(ProductView);

//Had to separate to use functional componet to use useState for the snackbar
export const FuncProductView = ({ selectedProduct, dispatch }) => {
  const [open, setOpen] = useState(false);
  const [selectedColor, setColor] = useState();
  const [selectedSize, setSize] = useState();
  const [quantity, setQuantity] = useState(1);
  const [missingData, setMissing] = useState(false);
  const [horizontal, setHorizontal] = useState("right");

  const AddToCart = () => {
    if (!selectedColor || !selectedSize) {
      setMissing(true);
      setHorizontal("right");
      setOpen(true);
    } else {
      setHorizontal("left");
      setOpen(true);
      dispatch(
        handleAddToCart(selectedProduct, selectedColor, selectedSize, quantity)
      );
    }
  };

  //Close of snackbar
  const handleClose = () => {
    setOpen(false);
  };

  const chooseColor = color => {
    setColor(color);
  };

  const chooseSize = e => {
    setSize(e.target.value);
  };

  const handleQuantity = type => {
    if (type === "add") {
      setQuantity(quantity + 1);
    } else {
      if (quantity != 1) {
        setQuantity(quantity - 1);
      }
    }
    // console.log("selected size");
    // console.log(e.target.value);
    // setSize(e.target.value);
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
    <Container>
      <ProductImageContainer>
        <Image src={selectedProduct.img} />
      </ProductImageContainer>
      <ProductInfoContainer>
        <Name>
          {selectedProduct.name}
        </Name>
        <Description>
          {selectedProduct.description}
        </Description>
        <Price>
          $ {selectedProduct.price}
        </Price>
        <FiltersContainer>
          {/* Color Filter */}
          <Filter>
            <FilterText>Color</FilterText>
            {selectedProduct.colors.map((color, index) => {
              return (
                <FilterColor
                  key={index}
                  color={color}
                  onClick={() => chooseColor(color)}
                />
              );
            })}
          </Filter>
          {/* Size Filter */}
          <Filter>
            <FilterText>Size</FilterText>
            <Select onChange={chooseSize}>
              <Option selected disabled>
                Size
              </Option>
              {selectedProduct.sizes.map((size, index) => {
                return (
                  <Option key={index}>
                    {size}
                  </Option>
                );
              })}
            </Select>
          </Filter>
        </FiltersContainer>

        <AddToCartContainer>
          <QuantityContainer>
            <Icon>
              <Remove onClick={() => handleQuantity("remove")} />
            </Icon>
            <Quantity>
              {quantity}
            </Quantity>
            <Icon>
              <Add onClick={() => handleQuantity("add")} />
            </Icon>
          </QuantityContainer>
          <AddButton onClick={AddToCart}>Add To Cart</AddButton>
        </AddToCartContainer>
      </ProductInfoContainer>
      {/* Snackbar on adding product to cart/or error in case of not choosing size and color */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        // action={snackActions}
      >
        {missingData
          ? <Alert
              severity="error"
              variant="filled"
              elevation={6}
              // onClose={handleClose}
              // action={snackActions}
            >
              Please Select Color and Size
            </Alert>
          : <Alert
              severity="success"
              variant="filled"
              elevation={6}
              // onClose={handleClose}
              action={snackActions}
            >
              item added to your cart
            </Alert>}
      </Snackbar>
    </Container>
  );
};
