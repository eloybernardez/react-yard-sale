import React, { useContext, useMemo, memo } from "react";
import AppContext from "../context/AppContext";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";

const ProductList = memo(function ProductList() {
  const { state, products } = useContext(AppContext);
  const newProducts = useMemo(
    () => (state.products.length ? state.products : products),
    [state.products, products]
  );

  console.log("render");

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
});

export default ProductList;
