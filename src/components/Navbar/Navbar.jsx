import React, { useEffect, useState } from "react";
import {
  NavbarContainer,
  Navlinks,
  BurgerLinks,
  ContenedorLinks,
} from "./NavbarStyles";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useMenu } from "./MenuContext/MenuContext";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMenuOpen, openMenu, closeMenu } = useMenu();

  const handleScroll = () => {
    if (window.scrollY > 80 || window.innerWidth <= 761) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleBurgerClick = () => {
    if (window.innerWidth <= 761) {
      isMenuOpen ? closeMenu() : openMenu();
      setIsScrolled(true);
     
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 761) {
      closeMenu();
    }
  };

  return (
    <NavbarContainer className={isScrolled ? "scrolled" : ""}>
      {window.innerWidth <= 761 && (
        <Hamburger
          className={isScrolled ? "scrolled burguer" : ""}
          toggled={isMenuOpen}
          toggle={handleBurgerClick}
          zIndex={99}
        />
      )}
      <BurgerLinks isMenuOpen={isMenuOpen}>
        <ContenedorLinks>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/Nosotros" onClick={handleLinkClick}>
            Nosotros
          </Link>
          <Link to="/Productos" onClick={handleLinkClick}>
            Productos
          </Link>
          <Link to="/" onClick={handleLinkClick}>
            Ofertas
          </Link>
          <Link to="/Contacto" onClick={handleLinkClick}>
            Contacto
          </Link>
        </ContenedorLinks>
      </BurgerLinks>
      <Navlinks>
        <div className="contenedorLinks">
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/Nosotros" onClick={handleLinkClick}>
            Nosotros
          </Link>
          <Link to="/Productos" onClick={handleLinkClick}>
            Productos
          </Link>
          <Link to="/" onClick={handleLinkClick}>
            Ofertas
          </Link>
          <Link to="/Contacto" onClick={handleLinkClick}>
            Contacto
          </Link>
        </div>
      </Navlinks>
    </NavbarContainer>
  );
}

export default Navbar;
