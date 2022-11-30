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

const getData = (data, initialData = initialUsers) => {
  const oldData = window.localStorage.getItem(data);
  return oldData ? JSON.parse(oldData) : initialData;
};

const saveData = (data, dataToStore) => {
  const stringData = JSON.stringify(dataToStore);
  window.localStorage.setItem(data, stringData);
};

const storagedUsers = getData("users", initialUsers);

const useGetUsers = () => {
  const [users, setUsers] = useState(storagedUsers);

  const findUser = (email, pass) => {
    const findedUser = users.find(
      (user) => user.email === email && user.pass === pass
    );

    return findedUser || false;
  };

  const handleItems = (user, items) => {
    const findedUser = findUser(user.email, user.pass);

    const newUsers = users.filter(
      (user) => user.email !== findedUser.email && user.pass !== findedUser.pass
    );
    setUsers([
      ...newUsers,
      { ...findedUser, cart: [...findedUser.cart, ...items] },
    ]);

    saveData("users", users);
  };

  return { users, setUsers, findUser, handleItems, saveData, getData };
};

export default useGetUsers;
