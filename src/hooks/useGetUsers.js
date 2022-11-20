import React, { useState } from "react";

const initialUsers = [
  {
    name: "Eloy",
    email: "eloy@gmail.com",
    pass: 1234,
    cart: [],
  },
  {
    name: "Jose",
    email: "jose@gmail.com",
    pass: 4321,
    cart: [],
  },

  { name: "Judith", email: "judith@gmail.com", pass: 6789, cart: [] },
];

const getUsers = () => {
  const oldUsers = window.localStorage.getItem("users");
  return oldUsers ? JSON.parse(oldUsers) : initialUsers;
};

const saveUsers = (users) => {
  const stringUsers = JSON.stringify(users);
  window.localStorage.setItem("users", stringUsers);
};

const storagedUsers = getUsers();

const useGetUsers = () => {
  const [users, setUsers] = useState(storagedUsers);

  const findUser = (email, pass) => {
    const findedUser = users.find(
      (user) => user.email === email && user.pass === pass
    );

    return findedUser || false;
  };

  const handleItems = (user, item) => {
    setUsers([...users, { ...user, cart: [...user.cart, item] }]);
  };

  return { users, findUser, handleItems, saveUsers };
};

export default useGetUsers;
