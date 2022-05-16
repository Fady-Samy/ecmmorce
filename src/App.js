import "./App.css";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { ProductList } from "./pages/ProductList";
import { Cart } from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Announcement } from "./components/Announcement/Announcement";

class App extends Component {
  // componentDidMount() {
  //   this.props.dispatch(handleInitialData());
  // }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Announcement />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories/:name" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default connect()(App);
