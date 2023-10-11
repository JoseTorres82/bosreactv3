import React, { useContext } from "react";



const ButtonAdd = ({ product }) => {
  const { addToCart } = useContext(/* CartContext */);

  const handleAddToCart = () => {

    addToCart(product);
  };

  return (
   <button onClick={handleAddToCart}><span>Agregar</span></button>
     
  );
};

export default ButtonAdd;
