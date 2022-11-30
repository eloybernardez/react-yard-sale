import { useState } from "react";
import useGetProducts from "./useGetProducts";
import useGetUsers from "./useGetUsers";

const API = "https://api.escuelajs.co/api/v1/products";

const initialState = {
  products: [],
  cart: [],
};

const useInitialState = () => {
  const { products, loading } = useGetProducts(API);
  const { users, setUsers, handleItems, saveData, findUser, getData } =
    useGetUsers();
  const [state, setState] = useState(getData("cart", initialState));
  const [currentUser, setCurrentUser] = useState(null);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });

    saveData("cart", { ...state, cart: [...state.cart, payload] });
  };

  const removeFromCart = (key) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => {
        return key !== index;
      }),
    });
    saveData("cart", {
      ...state,
      cart: state.cart.filter((_, index) => key !== index),
    });
  };

  const removeFromCartWithId = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((product) => {
        return product.id !== id;
      }),
    });
    saveData("cart", {
      ...state,
      cart: state.cart.filter((product) => {
        return product.id !== id;
      }),
    });
  };

  const updateProducts = (string) => {
    const filterProducts = products.filter(
      (product) => product.category.name === string
    );

    setState({
      ...state,
      products: filterProducts.length ? filterProducts : [...products],
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
    products,
    loading,
    updateProducts,
    addToCart,
    removeFromCart,
    removeFromCartWithId,
    sumTotal,
    users,
    setUsers,
    handleItems,
    saveData,
    findUser,
    currentUser,
    setCurrentUser,
    getData,
  };
};

export default useInitialState;
