import React from "react";
import { useCart } from "../../../Context/CartContext";
import { CartIconStyled } from "../HeaderBottomStyles";
import { TfiBag } from "react-icons/tfi";

const CartIcon = () => {
  const { getTotalItemsInCart } = useCart();

  return (
    <CartIconStyled>
      <div className="bagContainer">
        <TfiBag className="bag" />
        <span className="cartItemCount">{getTotalItemsInCart()}</span>
      </div>
    </CartIconStyled>
  );
}

export default CartIcon;
