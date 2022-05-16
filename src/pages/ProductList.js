import React from "react";
import { Filters } from "../components/Filters/Filters";
import ProductsContainer from "../components/Products/ProductsContainer";
import { WithRouter } from "../components/UtilsComponent/WithRouter";

export const ProductList = () => {
  return (
    <div>
      <Filters />
      <WithRouter WrappedComponent={ProductsContainer} />
    </div>
  );
};
