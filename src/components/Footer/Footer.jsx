import React from "react";
import { Link } from "react-router-dom";
import { FooterContentBox } from "./FooterStyles";
import { FaFacebook, FaInstagram } from "react-icons/fa"; 

function Footer() {
  return (
    <FooterContentBox>
      <div className="FooterMainBox">
        <div className="footer">
          <div className="grupo-1">
            <div className="box">
              <div className="footer-name">
                <h1>Buenas Olas Store</h1>
              </div>
              <div className="box">
                <div className="redes">
                  <a href="#">
                    <FaFacebook /> 
                  </a>
                  <a href="#">
                    <FaInstagram /> 
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-links">
              <Link to="/">Términos y condiciones</Link>
              <Link to="/">Cambios y devoluciones</Link>
              <Link to="/">Cuidados</Link>
              <Link to="/Nosotros">Nosotros</Link>
              <Link to="/Contacto">Contacto</Link>
            </div>
            <div className="grupo-2">
              <small>
                &copy; 2023 <b>Buenas Olas Store - Mar del Plata BA-ARG</b> -
                Todos los derechos reservados.
              </small>
            </div>
          </div>
        </div>
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </FooterContentBox>
  );
}

export default Footer;
