import React, { Suspense, lazy } from "react";
import LoadingState from "../containers/LoadingState";
// import ProductList from "../containers/ProductList";

const Home = () => {
  const ProductList = lazy(() => import("../containers/ProductList"));
  return (
    <Suspense fallback={<LoadingState />}>
      <ProductList />
    </Suspense>
  );
};

export default Home;
