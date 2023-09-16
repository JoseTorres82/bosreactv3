import React from "react";
import { NavbarContainer, Navlinks } from "./NavbarStyles";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <NavbarContainer>
      <Navlinks>
        <div className="contenedorLinks">
        <Link to="/">Home</Link>
        <Link to="/">Nosotros</Link>
        <Link to="/">Productos</Link>
        <Link to="/">Ofertas</Link>
        <Link to="/">Contacto</Link>
        </div>
      </Navlinks>
    </NavbarContainer>
  );
}

export default Navbar;
