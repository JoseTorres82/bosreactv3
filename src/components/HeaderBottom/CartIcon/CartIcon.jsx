import React, { useState } from "react";
import { useCart } from "../../../Context/CartContext";
import { CartIconStyled, CartContainer } from "../HeaderBottomStyles";
import { TfiBag } from "react-icons/tfi";
import Cart from "../CartItem/CartItems";

const CartIcon = () => {
  const { getTotalItemsInCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <CartIconStyled>
        <div className="bagContainer">
          <TfiBag className="bag" onClick={handleCartIconClick} />
          <span className="cartItemCount">{getTotalItemsInCart()}</span>
        </div>
      </CartIconStyled>
      <CartContainer>
        <div className='contenido'>
          {isCartOpen && <Cart />}
        </div>
      </CartContainer>
    </>
  );
}

export default CartIcon;
