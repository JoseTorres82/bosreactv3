import React, { useEffect, useState } from "react";
import { HeaderBottomStyled } from "./HeaderBottomStyles";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon/CartIcon";

function HeaderBottom() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openCart = () => {
    setIsCartOpen(true);
    <CartOverlay/>
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <HeaderBottomStyled>
      <div className={isScrolled ? "scrolled container" : ""}>
        <div className="ContenedorNavegacion">
          <div className="logoContainer">
            <Link to="/">
              <img src="logo.svg" alt="Header Logo" />
              <h1>
                Buenas Olas <span>Store</span>
              </h1>
            </Link>
          </div>
          <CartIcon/>
        </div>
      </div>
      
    </HeaderBottomStyled>
  );
}

export default HeaderBottom;
