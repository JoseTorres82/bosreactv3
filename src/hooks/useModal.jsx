import React, { useContext } from "react";
import { ModalContext } from "../Context/ModalContext.jsx"; 

const useModal = () => {
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);

  return { isModalOpen, openModal, closeModal };
};

export default useModal;