import React from "react";
import { Announcement } from "../components/Announcement/Announcement";
import { Categories } from "../components/Categories/Categories";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Newsletter } from "../components/Newletter/Newsletter";
import Products from "../components/Products/Products";
import { Slider } from "../components/Slider/Slider";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products type="popular" />
      <Newsletter />
      <Footer />
    </div>
  );
};
