import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";

const ProductList = () => {
  const { state, products } = useContext(AppContext);
  const newProducts = state.products.length ? state.products : products;

  return (
    <section className="main-container">
      <div className="ProductList">
        {newProducts.map((product, index) => {
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
