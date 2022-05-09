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
import { WithRouter } from "../UtilsComponent/WithRouter";

class ProductView extends Component {
  render() {
    const availableColors = ["black", "blue", "gray"];
    const sizeFilter = ["XS", "S", "M", "L", "XL", "XXL"];

    //Getting the id of the product to view from URL using useParams Hook
    const { useParams, products } = this.props;
    const id = useParams.id;
    return (
      <Container>
        <ProductImageContainer>
          <Image src={products[id].img} />
        </ProductImageContainer>
        <ProductInfoContainer>
          <Name>
            {products[id].name}
          </Name>
          <Description>
            {products[id].description}
          </Description>
          <Price>
            $ {products[id].price}
          </Price>
          <FiltersContainer>
            <Filter>
              <FilterText>Color</FilterText>
              {products[id].colors.map((color, index) => {
                return <FilterColor key={index} color={color} />;
              })}
            </Filter>
            <Filter>
              <FilterText>Size</FilterText>
              <Select>
                <Option selected disabled>
                  Size
                </Option>
                {products[id].sizes.map((size, index) => {
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
  return {
    products: products,
    useParams: props.useParams
  };
}

export default connect(mapStateToProps)(ProductView);
