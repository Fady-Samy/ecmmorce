import { Add, Remove } from "@mui/icons-material";
import React, { Component } from "react";
import {
  Button,
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

import { connect } from "react-redux";

class ProductView extends Component {
  render() {
    const { selectedProduct } = this.props;

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
            <Button>Add To Cart</Button>
          </AddToCartContainer>
        </ProductInfoContainer>
      </Container>
    );
  }
}
function mapStateToProps({ products }, props) {
  //Getting the product with the id from URL using useParams Hook to view
  let productsArray = products.products;
  let selectedProduct;
  console.log("check id");
  console.log(props.useParams.id);
  if (productsArray) {
    for (let i = 0; i < productsArray.length; i++) {
      console.log("inside for");
      if (productsArray[i].id == props.useParams.id) {
        console.log("inside if");
        selectedProduct = productsArray[i];
        break;
      }
    }
  }

  console.log("found");
  console.log(selectedProduct);

  return {
    selectedProduct: selectedProduct,
    useParams: props.useParams
  };
}

export default connect(mapStateToProps)(ProductView);
