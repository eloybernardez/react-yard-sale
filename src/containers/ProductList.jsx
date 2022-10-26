import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";

const ProductList = () => {
  const { state, newProducts } = useContext(AppContext);
  const products = state.products.length ? state.products : newProducts;
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product, index) => {
          return (
            <ProductItem
              product={product}
              indexValue={index}
              index={product.id}
              key={product.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
