import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Announcement } from "../components/Announcement/Announcement";
import { Filters } from "../components/Filters/Filters";
import { Products } from "../components/Products/Products";
import { Footer } from "../components/Footer/Footer";
export const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Filters />
      <Products />
      <Footer />
    </div>
  );
};
