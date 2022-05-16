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

import { Alert, Button, IconButton, Skeleton, Snackbar } from "@mui/material";
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
      // console.log("inside for");
      if (productsArray[i].id == props.useParams.id) {
        // console.log("inside if");
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

//Snackbar
export const FuncProductView = ({ selectedProduct, dispatch }) => {
  const [open, setOpen] = useState(false);

  const AddToCart = () => {
    setOpen(true);
    dispatch(handleAddToCart(selectedProduct));
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
          <Filter>
            <FilterText>Color</FilterText>
            {selectedProduct.colors.map((color, index) => {
              return <FilterColor key={index} color={color} />;
            })}
          </Filter>
          <Filter>
            <FilterText>Size</FilterText>
            <Select>
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
              <Remove />
            </Icon>
            <Quantity>1</Quantity>
            <Icon>
              <Add />
            </Icon>
          </QuantityContainer>
          <AddButton onClick={AddToCart}>Add To Cart</AddButton>
        </AddToCartContainer>
      </ProductInfoContainer>
      {/* Snackbar on adding product to cart */}
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
    </Container>
  );
};
