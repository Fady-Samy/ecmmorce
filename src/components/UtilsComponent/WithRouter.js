import { useNavigate, useParams } from "react-router-dom";
import ProductView from "../../components/ProductView/ProductView";

//we use this component as we can not use the useParams hook in a class component which we are using in ProductViewComponent as we need props in that component and we can not use it in functional component
//so here the WrappedComponent passed down is that ProductView component

import React from "react";

export const WithRouter = () => {
  const params = useParams();
  return <ProductView useParams={params} />;
};
