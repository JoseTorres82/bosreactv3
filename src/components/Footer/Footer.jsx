import React from "react";
import { Link } from "react-router-dom";
import { FooterContentBox } from "./FooterStyles";

function Footer() {
  return (
    <FooterContentBox>
    <div className="FooterMainBox">
      <p>
        Buenas Olas Store es indumentaria de entrenamiento que provee calce
        anatómico, extraordinarios diseños, y propiedades técnicas que incluyen
        termorregulación, tejidos absorbentes e incremento de oxigenación en los
        músculos.
      </p>
      <Link>AYUDA</Link> 
      <Link>preguntas frecuentes</Link>
      <Link>cómo comprar</Link> 
      <Link>guía de talles</Link> 
      <Link>pago envío cambios</Link>
      <Link>términos y condiciones</Link>
      <Link>MI CUENTA </Link>
      <Link>registrarme </Link>
      <Link>ingresar </Link>
      <Link>mis pedidos </Link>
      <Link>mis direcciones </Link>
      <Link>botón de arrepentimiento</Link> 
      <Link>favoritos </Link>
      <Link>INSTITUCIONAL </Link>
      <Link>la empresa </Link>
      <Link>sucursales </Link>
      <Link>buscador </Link>
      <Link>contacto </Link>
      <Link>instagram </Link>
      <Link>facebook</Link>
    </div>
    </FooterContentBox>
  );
}

export default Footer;
