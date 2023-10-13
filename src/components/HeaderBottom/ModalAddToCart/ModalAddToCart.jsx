import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  width: 300px;
  height: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 777; 
  background-color: aliceblue;
  color: #131415;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ModalAddToCart = ({ product, actionType }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 20000); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const getMessage = () => {
    const { name, quantity } = product;
    return actionType === "ADD_TO_CART"
      ? `Agregaste ${quantity} ${name} al carrito`
      : `Eliminaste ${quantity} ${name} del carrito`;
  };

  return (
    <ModalContainer>
      {getMessage()}
    </ModalContainer>
  );
};

export default ModalAddToCart;
