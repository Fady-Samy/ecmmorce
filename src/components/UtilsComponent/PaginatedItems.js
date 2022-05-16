import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { Container } from "../Products/ProductsStyled";
import { Product } from "../Products/Product";
import { NavLink } from "../../GlobalStyles";

export function PaginatedItems({ productsPerPage, products, dispatch }) {
  const [currentProducts, setCurrentProducts] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [productOffset, setProductOffset] = useState(0);

  // console.log("Products recieved at paginated");
  // console.log(products);
  useEffect(
    () => {
      // console.log("inside useEffect");
      // Fetch items from another resources.
      const endOffset = productOffset + productsPerPage;
      console.log(`Loading items from ${productOffset} to ${endOffset}`);
      products && setCurrentProducts(products.slice(productOffset, endOffset));
      products && setPageCount(Math.ceil(products.length / productsPerPage));
    },
    [products, productOffset, productsPerPage]
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
      <Items currentProducts={currentProducts} dispatch={dispatch} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={<NavigateNextIcon />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<NavigateBeforeIcon />}
        renderOnZeroPageCount={null}
        // All classes from bootstrap
        containerClassName="pagination justify-content-center"
        previousClassName="page-item me-2 " //li
        previousLinkClassName="page-link" //a
        pageClassName="page-item me-2" //li
        pageLinkClassName="page-link" //a
        nextClassName=" page-item" //li
        nextLinkClassName="page-link" //a
        activeClassName="active"
      />
    </Fragment>
  );
}

function Items({ currentProducts, dispatch }) {
  // console.log("Current Product in Items");
  // console.log(currentProducts);
  return (
    <Container>
      {currentProducts &&
        currentProducts.map((product, index) =>
          <Product key={index} product={product} dispatch={dispatch} />
        )}
    </Container>
  );
}
