import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Announcement } from "../components/Announcement/Announcement";
import { Filters } from "../components/Filters/Filters";

import { Footer } from "../components/Footer/Footer";
import { ProductView } from "../components/ProductView/ProductView";

export const Product = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <ProductView />
      <Footer />
    </div>
  );
};
