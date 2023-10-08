import React from "react";
import { Link } from "react-router-dom";

import { MediaWrapper } from "../../pages/About/AboutStyles";
import { AboutWrapper } from "../../pages/About/AboutStyles";


function AboutUs() {
  return (
    <AboutWrapper>
      <MediaWrapper>
        <img src="/images/img20.jpg" alt="aboutImg" />
        <section>
        <h2>
          ¡Bienvenidos a <span>Buenas Olas Store</span>!
        </h2>
        <p>
           En Buenas Olas Store, creemos en la combinación perfecta de
          estilo y comodidad. Nuestra colección está diseñada pensando en
          hombres y mujeres que buscan prendas versátiles que se adapten a su
          estilo de vida activo y relajado. Ya sea que estés paseando por la
          costa, explorando la ciudad o simplemente relajándote, encontrarás las
          prendas ideales que se ajustan a tu personalidad y te brindan
          confianza. Nos enorgullece no solo ofrecer moda de alta calidad, sino
          también brindar un servicio excepcional. Nuestro equipo está aquí para
          ayudarte en cada paso del camino, desde la selección de tallas hasta
          el seguimiento de tu pedido. Tu satisfacción es nuestra prioridad
          número uno. Únete a la ola de estilo y autenticidad con Buenas Olas
          Store. Explora nuestra colección y descubre cómo puedes lucir
          increíble mientras te sumerges en la relajada elegancia de Mar del
          Plata. Gracias por elegirnos, El equipo de Buenas Olas Store
        </p>
        <div className="LogoAbout">
        <Link to="/">
          <img src="logo.svg" alt="Header Logo" className="LogoAbout" />
        </Link>
        </div>
      </section>
      </MediaWrapper>
      
  
    </AboutWrapper>
    
  );
 
}

export default AboutUs;
