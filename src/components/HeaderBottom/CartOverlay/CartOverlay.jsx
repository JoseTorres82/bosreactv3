import React from "react";
import { useCart } from "../../../Context/CartContext"; 

function CartOverlay() {
  const { cart, addToCart, getTotalItemsInCart } = useCart();

  return (
    <div>
      <h2>Productos en el carrito: {getTotalItemsInCart()}</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity}
            <button onClick={() => addToCart(item)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartOverlay;
