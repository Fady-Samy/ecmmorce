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

import { NavLink } from "../../GlobalStyles";

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
              <NavLink to={`/categories/${category.name}`}>
                <Button>SHOP NOW</Button>
              </NavLink>
            </Info>
          </Category>
        );
      })}
    </Container>
  );
};
