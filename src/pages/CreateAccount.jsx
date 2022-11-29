import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ModalConfirm from "../components/ModalConfirm";
import AppContext from "../context/AppContext";
import "../styles/CreateAccount.scss";

const CreateAccount = () => {
  const { setUsers, users, saveUsers, state } = useContext(AppContext);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const form = useRef(null);

  const handleNewUser = () => {
    const accountData = new FormData(form.current);
    const data = {
      name: accountData.get("name"),
      email: String(accountData.get("email")),
      pass: Number(accountData.get("pass")),
    };

    const isAlreadyRegistered = users.some((user) => user.email === data.email);

    if (isAlreadyRegistered) {
      setError(true);
      return;
    } else {
      addNewUser(data.name, data.email, data.pass);
      setModal(true);
    }
  };

  async function handleModal(confirm) {
    setModal(confirm);
    setTimeout(() => navigate("/"), 1000);
  }

  const addNewUser = (name, email, pass) => {
    const newUser = { name, email, pass, cart: [...state.cart] };
    setUsers([...users, newUser]);
    saveUsers([...users, newUser]);
  };

  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        {modal ? (
          <ModalConfirm
            title="New user created"
            message="You've registered correctly"
            setModal={async () => await handleModal(false)}
          />
        ) : null}
        <h1 className="title">New Account</h1>
        <form action="/" className="form" ref={form}>
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jane"
              className="input input-name"
              required
            />
            <label
              htmlFor="email"
              className={error ? "label label--error" : "label"}
            >
              {error ? "Email already registered" : "Email"}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="janedoe@example.com"
              className={
                error ? "input input-email input--error" : "input input-email"
              }
              onKeyDown={() => setError(false)}
              required
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="*********"
              className="input input-password"
              required
            />
          </div>
          <button
            type="button"
            className="primary-button signup-button"
            onClick={() => {
              setError(false);
              handleNewUser();
            }}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
