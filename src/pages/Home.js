import React from "react";
import { Categories } from "../components/Categories/Categories";
import { Newsletter } from "../components/Newletter/Newsletter";
import ProductsContainer from "../components/Products/ProductsContainer";
import { Slider } from "../components/Slider/Slider";
import { WithRouter } from "../components/UtilsComponent/WithRouter";
export const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <WithRouter WrappedComponent={ProductsContainer} />
      <Newsletter />
    </div>
  );
};
