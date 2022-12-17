import { useState, useContext } from "react";
import AppContext from "../context/AppContext";

const useValidation = () => {
  const { saveData, users, setUsers, state, currentUser } =
    useContext(AppContext);
  const [error, setError] = useState(false);

  const validateEmail = (form) => {
    const userInputs = new FormData(form.current);

    const data = {
      email: userInputs.get("email"),
    };

    setError(false);
    return users.some((user) => user.email === data.email);
  };

  const validatePassword = (form) => {
    const userInputs = new FormData(form.current);

    const data = {
      password: userInputs.get("password"),
      newPassword: userInputs.get("newPassword"),
    };

    const changePassword = (newPassword) => {
      const oldUser = users.find((user) => user.email === currentUser.email);

      const changedPasswordUser = { ...oldUser, pass: Number(newPassword) };

      const oldUsers = users.filter((user) => user.email !== currentUser.email);

      const newUsers = [...oldUsers, changedPasswordUser];

      setUsers(newUsers);
      saveData("users", newUsers);
    };

    setError(false);
    data.password === data.newPassword && data.password !== currentUser.pass
      ? changePassword(data.newPassword)
      : setError(true);
    return data.password === data.newPassword;
  };

  const handleNewUser = (form) => {
    const accountData = new FormData(form.current);
    const data = {
      name: accountData.get("name"),
      email: String(accountData.get("email")),
      pass: Number(accountData.get("pass")),
    };

    const addNewUser = (name, email, pass) => {
      const newUser = { name, email, pass, cart: [...state.cart] };
      setUsers([...users, newUser]);
      saveData("users", [...users, newUser]);
    };

    const isAlreadyRegistered = users.some((user) => user.email === data.email);

    setError(false);
    if (isAlreadyRegistered) {
      setError(true);
    } else {
      addNewUser(data.name, data.email, data.pass);
    }
  };

  return {
    error,
    setError,
    validateEmail,
    validatePassword,
    handleNewUser,
  };
};

export default useValidation;
