import React, { useContext } from "react";
/* import { CartContext } from "./CartContext"; */ // Asume que tienes un contexto para el carrito de compras


const ButtonAdd = ({ product }) => {
  const { addToCart } = useContext(/* CartContext */);

  const handleAddToCart = () => {
    // Llama a la función addToCart del contexto para agregar el producto al carrito
    addToCart(product);
  };

  return (
   <button onClick={handleAddToCart}><span>Agregar</span></button>
     
  );
};

export default ButtonAdd;
