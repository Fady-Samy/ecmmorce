import React, { Component } from "react";
import {
  Container,
  HoverButtons,
  Icon,
  Image,
  Product
} from "./ProductsStyled";

import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

import { NavLink } from "../../GlobalStyles";
import { connect } from "react-redux";
import { handleProductsData } from "../../actions/sharedAction";

class Products extends Component {
  componentDidMount() {
    //Getting the type of products to show (popular in home page or specific category)
    const { type } = this.props;

    //Call the action creator which gets data from api
    this.props.dispatch(handleProductsData());
  }
  render() {
    const { productsIds, products } = this.props;

    return (
      <Container>
        {productsIds.map((id, index) => {
          return (
            <NavLink to={`/product/${id}`} key={index}>
              <Product>
                <Image src={products[id].img} />
                <HoverButtons>
                  <Icon>
                    <ShoppingCartOutlined />
                  </Icon>
                  <Icon>
                    <SearchOutlined />
                  </Icon>
                  <Icon>
                    <FavoriteBorderOutlined />
                  </Icon>
                </HoverButtons>
              </Product>
            </NavLink>
          );
        })}
      </Container>
    );
  }
}

//Getting the products data from the state
function mapStateToProps({ products }) {
  console.log("hereeee ");
  console.log(products);
  return {
    productsIds: Object.keys(products),
    products: products
  };
}

export default connect(mapStateToProps)(Products);
