import React from "react";

const CartItem = ({ item, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} />
      <div className="item-details">
        <h4>{item.title}</h4>
        <p>Precio: ${item.price}</p>
      </div>
      <div className="item-quantity">
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
