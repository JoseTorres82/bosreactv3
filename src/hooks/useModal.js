import React, { useContext, useState } from "react";
import { ModalContext } from "../Context/ModalContext"; 

const useModal = () => {
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);

  

  return { isModalOpen, openModal, closeModal };
};

export default useModal;
