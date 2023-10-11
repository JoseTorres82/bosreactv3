import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const ModalMessage = styled.p`
  font-size: 1rem;
`;

const ModalButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
`;

function ModalContacto({ title, message, onClose }) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
        <ModalButton onClick={onClose}>Cerrar</ModalButton>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default ModalContacto;
