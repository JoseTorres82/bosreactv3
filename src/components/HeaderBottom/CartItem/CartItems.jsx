import React from "react";
import { useCart } from "../../../Context/CartContext";

const Cart = () => {
  const { cart, emptyCart } = useCart();

  const handleEmptyCart = () => {
    if (cart.length > 0) {
      const confirmEmpty = window.confirm("¿Seguro que deseas vaciar el carrito?");
      if (confirmEmpty) {
        emptyCart();
        localStorage.removeItem("cart");
        alert("Se ha vaciado el carrito");
      }
    }
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      const confirmCheckout = window.confirm("¿Deseas finalizar la compra?");
      if (confirmCheckout) {
        emptyCart();
        localStorage.removeItem("cart");
        alert("Gracias por tu compra");
      }
    }
  };

  return (
    <div className="cart-overlay">
      <div className="cart-content">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: {item.price}</p>
              <p>Total: {item.price * item.quantity}</p>
            </div>
          ))
        ) : (
          <p>Tu carrito está vacío.</p>
        )}
        {cart.length > 0 && (
          <div>
            <h3>Subtotal</h3>
            <span>
              {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
            </span>
            <div>
              <button onClick={handleEmptyCart}>Vaciar Carrito</button>
              <button onClick={handleCheckout}>Finalizar Compra</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
