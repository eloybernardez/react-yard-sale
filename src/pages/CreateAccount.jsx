import React, { useRef } from "react";
import useModal from "../hooks/useModal";
import ModalConfirm from "../components/ModalConfirm";
import useValidation from "../hooks/useValidation";
import "../styles/CreateAccount.scss";

const CreateAccount = () => {
  const { error, setError, handleNewUser } = useValidation();
  const { modal, handleModal, setModal } = useModal();
  const form = useRef(null);

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
              handleNewUser(form);
              setModal(true);
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
