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
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const [state, setState] = useState(getData("cart", initialState));

  const handleAdded = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const addToCart = (payload) => {
    const stateToSave = {
      ...state,
      cart: [...state.cart, payload],
    };
    setState(stateToSave);

    saveData("cart", stateToSave);
  };

  const handleCart = (item) => {
    if (!item.cart) {
      addToCart(item);
      item.cart = true;
    } else {
      removeFromCartWithId(item.id);
      item.cart = false;
    }
    handleAdded();
  };

  const removeFromCart = (key) => {
    const stateToSave = {
      ...state,
      cart: state.cart.filter((_, index) => {
        return key !== index;
      }),
    };
    setState(stateToSave);
    saveData("cart", stateToSave);
  };

  const removeFromCartWithId = (id) => {
    const stateToSave = {
      ...state,
      cart: state.cart.filter((product) => {
        return product.id !== id;
      }),
    };
    setState(stateToSave);
    saveData("cart", stateToSave);
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

  const confirmOrder = (user, items) => {
    // Save logged user items
    handleItems(user, items);

    // Eliminate bought products
    const newInventory = products.map((item) => {
      return { ...item, cart: false };
    });
    const emptiedCart = { ...state, cart: [], products: newInventory };

    // Clean cart of bought items
    setState(emptiedCart);
    saveData("cart", emptiedCart);

    const updatedUser = { ...user, cart: [...user.cart, ...items] };
    // Update logged user
    setCurrentUser(updatedUser);
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
    setState,
    setUsers,
    handleItems,
    saveData,
    findUser,
    currentUser,
    setCurrentUser,
    getData,
    handleCart,
    confirmOrder,
    isAdded,
  };
};

export default useInitialState;
