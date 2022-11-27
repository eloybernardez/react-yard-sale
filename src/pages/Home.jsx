import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import LoadingState from "../containers/LoadingState";
import ProductList from "../containers/ProductList";

const Home = () => {
  const { loading } = useContext(AppContext);
  return !loading ? <ProductList /> : <LoadingState />;
};

export default Home;
