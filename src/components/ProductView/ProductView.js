import { Add, Remove } from "@mui/icons-material";
import React from "react";
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

export const ProductView = () => {
  const availableColors = ["black", "blue", "gray"];
  const sizeFilter = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <Container>
      <ProductImageContainer>
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
      </ProductImageContainer>
      <ProductInfoContainer>
        <Name>Denim Jumpsuit</Name>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
          iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
          tristique tortor pretium ut. Curabitur elit justo, consequat id
          condimentum ac, volutpat ornare.
        </Description>
        <Price>$ 20</Price>
        <FiltersContainer>
          <Filter>
            <FilterText>Color</FilterText>
            {availableColors.map((color, index) => {
              return <FilterColor key={index} color={color} />;
            })}
          </Filter>
          <Filter>
            <FilterText>Size</FilterText>
            <Select>
              <Option selected disabled>
                Size
              </Option>
              {sizeFilter.map((size, index) => {
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
};
