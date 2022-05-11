import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Announcement } from "../components/Announcement/Announcement";
import { Filters } from "../components/Filters/Filters";
import Products from "../components/Products/Products";
import { Footer } from "../components/Footer/Footer";
import { WithRouter } from "../components/UtilsComponent/WithRouter";

export const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Filters />
      <WithRouter WrappedComponent={Products} />
      <Footer />
    </div>
  );
};
