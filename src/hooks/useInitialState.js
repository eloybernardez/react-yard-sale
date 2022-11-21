import { useState } from "react";
import useGetProducts from "./useGetProducts";
import useGetUsers from "./useGetUsers";

const API = "https://api.escuelajs.co/api/v1/products";

const initialState = {
  products: [],
  cart: [],
};

const useInitialState = () => {
  const newProducts = useGetProducts(API);
  const { users, handleItems, saveUsers, findUser, getUsers } = useGetUsers();
  const [state, setState] = useState(initialState);
  const [currentUser, setCurrentUser] = useState(null);

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
    users,
    handleItems,
    saveUsers,
    findUser,
    currentUser,
    setCurrentUser,
    getUsers,
  };
};

export default useInitialState;
