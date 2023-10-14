/* import React, { useState } from "react";
import { useCart } from "../../../Context/CartContext";
import { CartIconStyled} from "../HeaderBottomStyles";
import { TfiBag } from "react-icons/tfi";
import Cart from "../Cart/Cart";


const CartIcon = () => {
  const { getTotalItemsInCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="cart">
        <CartIconStyled>
          <div className="bagContainer">
            <TfiBag className="bag" onClick={handleCartIconClick} />
            <span className="cartItemCount">{getTotalItemsInCart()}</span>
          </div>
        </CartIconStyled>
        <div className="cartContainer">
            <Cart/>
          </div>
      </div>
    </>
  );
};

export default CartIcon; */
import React, { useState } from "react";
import { useCart } from "../../../Context/CartContext";
import { CartIconStyled } from "../HeaderBottomStyles";
import { TfiBag } from "react-icons/tfi";
import { CartContainer } from "../HeaderBottomStyles";
import Cart from "../Cart/Cart";

const CartIcon = () => {
  const { getTotalItemsInCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="cart">
        <CartIconStyled>
          <div className="bagContainer">
            <TfiBag className="bag" onClick={handleCartIconClick} />
            <span className="cartItemCount">{getTotalItemsInCart()}</span>
          </div>
        </CartIconStyled>
        <CartContainer>
        {isCartOpen && <Cart />}
        </CartContainer>
      </div>
     
    </>
  );
};

export default CartIcon;
