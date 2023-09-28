import React from "react";
import { NavbarContainer, Navlinks } from "./NavbarStyles";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <NavbarContainer>
      <a href="#" className="app-menu Burguer"><span></span></a>
      <Navlinks>
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
