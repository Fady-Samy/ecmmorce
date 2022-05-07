import React from "react";
import {
  Filter,
  FiltersContainer,
  FilterText,
  Option,
  Select,
  Title
} from "./FiltersStyled";

export const Filters = () => {
  const colorsFilter = ["White", "Black", "Red", "Blue", "Yellow", "Green"];
  const sizeFilter = ["XS", "S", "M", "L", "XL", "XXL"];
  const sortOprtions = [
    "Newest",
    "Price ( Lowest First )",
    "Price ( Highest First )"
  ];

  return (
    <div>
      <Title>Dresses</Title>
      <FiltersContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option selected disabled>
              Color
            </Option>
            {colorsFilter.map((color, index) => {
              return (
                <Option key={index}>
                  {color}
                </Option>
              );
            })}
          </Select>
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

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            {sortOprtions.map((option, index) => {
              return (
                <Option key={index}>
                  {option}
                </Option>
              );
            })}
          </Select>
        </Filter>
      </FiltersContainer>
    </div>
  );
};
