import React from "react";
import { Link } from "react-router-dom";
import { useMenu } from '../MenuContext/MenuContext'; 
import { FiMenu } from 'react-icons/fi';
import { MobileMenuContainer } from './MenuHamburguesaStyles';

function MenuHamburguesa() {
  const { isMenuOpen, closeMenu } = useMenu();
  const isMobile = window.innerWidth <= 761; // Verifica el ancho de la pantalla

  return (
    <>
      {isMobile && (
        <MobileMenuContainer isOpen={isMenuOpen}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/Productos">Productos</Link>
            </li>
            <li>
              <Link to="/">Ofertas</Link>
            </li>
            <li>
              <Link to="/Contacto">Contacto</Link>
            </li>
          </ul>
          <button onClick={closeMenu}>
            <FiMenu />
          </button>
        </MobileMenuContainer>
      )}
    </>
  );
}

export default MenuHamburguesa;
