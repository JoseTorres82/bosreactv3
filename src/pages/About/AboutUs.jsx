import React from "react";

import { MediaWrapper } from "../../pages/About/AboutStyles";
import { AboutWrapper } from "../../pages/About/AboutStyles";
import Subscribe from "../../components/Suscripcion/Suscribe";

function AboutUs() {
  return (
    <AboutWrapper>
      <MediaWrapper>
        <video src="/HeroMove0.webm" autoPlay muted></video>
      </MediaWrapper>
      <section>
        <h2>
          ¡Bienvenidos a <span>Buenas Olas Store</span>!
        </h2>
        <p>
          Somos tu destino en línea para encontrar los outfits más modernos y
          frescos en Mar del Plata, Buenos Aires, Argentina. Nuestra pasión por
          la moda se refleja en nuestra cuidadosa selección de calsas y tops
          estampados y lisos que te harán lucir y sentirte increíble en cada
          ocasión. En Buenas Olas Store, creemos en la combinación perfecta de
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
      </section>
      <Subscribe />
    </AboutWrapper>
    
  );
 
}

export default AboutUs;
