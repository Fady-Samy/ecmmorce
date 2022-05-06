import React from "react";
import { categories } from "../../data/CategoriesData";
import {
  Button,
  Category,
  Container,
  Image,
  Info,
  Title
} from "./CategorieStyled";

export const Categories = () => {
  return (
    <Container>
      {categories.map((category, index) => {
        return (
          <Category key={index}>
            <Image src={category.img} />
            <Info>
              <Title>
                {category.title}
              </Title>
              <Button>SHOP NOW</Button>
            </Info>
          </Category>
        );
      })}
    </Container>
  );
};
