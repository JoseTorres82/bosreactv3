import React, { useEffect, useState } from 'react';
import { NavbarContainer, Navlinks } from "./NavbarStyles";
import { Link } from "react-router-dom";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer className={isScrolled ? 'scrolled container' : ''}>
      <Navlinks >
        <div className="contenedorLinks">
          <Link to="/">Home</Link>
          <Link to="/Nosotros">Nosotros</Link>
          <Link to="/Productos">Productos</Link>
          <Link to="/">Ofertas</Link>
          <Link to="/Contacto">Contacto</Link>
        </div>
       
      </Navlinks>
    </NavbarContainer>
  );
}

export default Navbar;
