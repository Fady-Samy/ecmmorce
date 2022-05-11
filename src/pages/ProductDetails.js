import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Announcement } from "../components/Announcement/Announcement";
import { Filters } from "../components/Filters/Filters";

import { Footer } from "../components/Footer/Footer";

import { WithRouter } from "../components/UtilsComponent/WithRouter";
import ProductView from "../components/ProductView/ProductView";

export const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <WithRouter WrappedComponent={ProductView} />
      <Footer />
    </div>
  );
};
