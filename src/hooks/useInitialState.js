import { useState } from "react";
import useGetProducts from "./useGetProducts";

const API = "https://api.escuelajs.co/api/v1/products";

const initialState = {
  products: [],
  cart: [],
};

const useInitialState = () => {
  const newProducts = useGetProducts(API);
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (key) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => {
        return key !== index;
      }),
    });
  };

  const removeFromCartWithId = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((product) => {
        return product.id !== id;
      }),
    });
  };

  const updateProducts = (string) => {
    const filterProducts = newProducts.filter(
      (product) => product.category.name === string
    );
    setState({
      ...state,
      products: filterProducts.length ? filterProducts : [...newProducts],
    });
    console.log(state);
  };

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return {
    state,
    newProducts,
    updateProducts,
    addToCart,
    removeFromCart,
    removeFromCartWithId,
    sumTotal,
  };
};

export default useInitialState;
