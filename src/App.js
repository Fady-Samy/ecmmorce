import "./App.css";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { ProductList } from "./pages/ProductList";
import { Cart } from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import { handleInitialData } from "./actions/sharedAction";

class App extends Component {
  // componentDidMount() {
  //   this.props.dispatch(handleInitialData());
  // }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories/:name" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
