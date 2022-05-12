import React, { Component } from "react";

import { connect } from "react-redux";
import { handleProductsData } from "../../actions/sharedAction";
import { emptyProducts } from "../../actions/productsAction";
import { PaginatedItems } from "../UtilsComponent/PaginatedItems";

import { Container, Title } from "./ProductsStyled";

import { Product } from "./Product";

class ProductsContainer extends Component {
  componentDidMount() {
    // console.log("Product Container Will Mount");
    //Getting the type of products to show from url (in home page it is empty or specific category in selected category)
    const { useParams } = this.props;
    //in the home page the name of category is empty so this will be the case for popular products
    let productsType = useParams.name ? useParams.name : "";
    //empty products data in the store to not overwrite as we are using this component for each category and popular products
    this.props.dispatch(emptyProducts());
    //Call the action creator which gets data from api
    this.props.dispatch(handleProductsData(productsType));
  }
  render() {
    // console.log("Product Container Render");

    const { products, useParams } = this.props;
    const mockItemsLoading = 8; // Or something else

    // console.log("name from params");
    // console.log(useParams.name);

    // console.log("products here2");
    // console.log(products);
    //If products defined then loading is finished
    return products
      ? useParams.name //Then In the home page no pagination needed
        ? <PaginatedItems productsPerPage={8} products={products} />
        : <div>
            <Title>POPULAR PRODUCTS</Title>
            <Container>
              {products &&
                products.map((product, index) => <Product product={product} />)}
            </Container>
          </div>
      : <div>
          <Title>POPULAR PRODUCTS</Title>
          <Container>
            {[...Array(mockItemsLoading)].map((e, i) => {
              return <Product product={null} />;
            })}
          </Container>
        </div>;
  }
}

//Getting the products data from the state
function mapStateToProps({ products }, props) {
  //the first products is the name of the reducer in the index file of reducers
  //the second one is the array we put in the state with the reducer
  let productsArray = products.products;
  // console.log("Getting products from store");
  // console.log(Array.isArray(products.products));
  // console.log(products.products);
  // console.log(products.products ? products.products.length : "");
  return {
    products: productsArray,
    useParams: props.useParams
  };
}

export default connect(mapStateToProps)(ProductsContainer);
