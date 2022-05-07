import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Announcement } from "../components/Announcement/Announcement";
import { Footer } from "../components/Footer/Footer";
import { CartView } from "../components/Cart/CartView";

export const Cart = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <CartView />
      <Footer />
    </div>
  );
};
