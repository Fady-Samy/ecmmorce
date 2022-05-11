import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Products from "../Products/Products";
import { WithRouter } from "./WithRouter";

import {
  Container,
  HoverButtons,
  Icon,
  Image,
  Product
} from "../Products/ProductsStyled";

import { FavoriteBorderOutlined, SearchOutlined } from "@mui/icons-material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

import { NavLink } from "../../GlobalStyles";

export function PaginatedItems({ productsPerPage, products }) {
  const [currentProducts, setCurrentProducts] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [productOffset, setProductOffset] = useState(0);

  useEffect(
    () => {
      // Fetch items from another resources.
      const endOffset = productOffset + productsPerPage;
      console.log(`Loading items from ${productOffset} to ${endOffset}`);
      products && setCurrentProducts(products.slice(productOffset, endOffset));
      products && setPageCount(Math.ceil(products.length / productsPerPage));
    },
    [productOffset, productsPerPage]
  );

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = event.selected * productsPerPage % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setProductOffset(newOffset);
  };

  return (
    <Fragment>
      <Items currentProducts={currentProducts} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </Fragment>
  );
}

function Items({ currentProducts }) {
  return (
    <Container>
      {currentProducts &&
        currentProducts.map((product, index) =>
          <NavLink to={`/product/${product.id}`} key={index}>
            <Product>
              <Image src={product.img} />
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
        )}
    </Container>
  );
}
