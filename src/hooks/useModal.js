import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useModal = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  async function handleModal(confirm) {
    setModal(confirm);
    setTimeout(() => navigate("/"), 1000);
  }

  return { modal, setModal, handleModal };
};

export default useModal;
