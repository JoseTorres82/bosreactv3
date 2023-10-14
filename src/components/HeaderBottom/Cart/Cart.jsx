import React, { useState, useEffect } from "react";
import { useCart } from "../../../Context/CartContext";
import {RxTriangleUp} from "react-icons/rx"

function CartItem({ item }) {
  const { dispatch } = useCart();

  const increaseQuantity = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const decreaseQuantity = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const removeItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <div className="cartItems">
      <div className="itemDesc">
        <p>{item.title}</p>
        <p> ${item.price * item.quantity}</p>
            <div className="quantity">
          <button onClick={increaseQuantity}>+</button>
          <p> {item.quantity}</p>
          <button onClick={decreaseQuantity}>-</button>
            </div>
        <button onClick={removeItem}>Eliminar</button>
      </div>
    </div>
  );
}

function Cart() {
  const { cart, dispatch, getTotalItemsInCart } = useCart();
  const [showModal, setShowModal] = useState(null);


  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setShowModal("Gracias por tu compra");
    dispatch({ type: "CLEAR_CART" }); // <--- Esto vacia el carrito
  };

  const handleClearCart = () => {
    setShowModal("El Carrito se vació correctamente");
    dispatch({ type: "CLEAR_CART" }); // Vaciar el carrito
  };

  useEffect(() => {
    if (cart.length === 0) {
      setShowModal("Tu carrito está vacío");
    } else {
      setShowModal(null);
    }
  }, [cart]);

  return (
    <div className="cartItem">
        <div className="closeCartSignal">
        <RxTriangleUp />
        </div>
      <h2>Tus Articulos</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <p>Cantidad : {getTotalItemsInCart()}</p>
      <p>Total: ${calculateTotalPrice()}</p>
      <div className="uiCartButtons">
        <button onClick={handleCheckout}>Finalizar Compra</button>
        <button onClick={handleClearCart}>Vaciar Carrito</button>
      </div>

      {showModal && (
        <div className="modal">
          <p>{showModal}</p>
          {showModal !== "Tu carrito está vacío" && (
            <button onClick={() => setShowModal("Sigue comprando")}>
              Continuar Comprando
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
