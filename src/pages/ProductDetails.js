import React from "react";
import { WithRouter } from "../components/UtilsComponent/WithRouter";
import ProductView from "../components/ProductView/ProductView";

export const ProductDetails = () => {
  return (
    <div>
      <WithRouter WrappedComponent={ProductView} />
    </div>
  );
};
