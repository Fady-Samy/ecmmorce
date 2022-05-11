import React from "react";
import { Announcement } from "../components/Announcement/Announcement";
import { Categories } from "../components/Categories/Categories";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Newsletter } from "../components/Newletter/Newsletter";
import ProductsContainer from "../components/Products/ProductsContainer";
import { Slider } from "../components/Slider/Slider";
import { WithRouter } from "../components/UtilsComponent/WithRouter";
export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <WithRouter WrappedComponent={ProductsContainer} />
      <Newsletter />
      <Footer />
    </div>
  );
};
