import React from "react";
import { ContactoWrapper } from "../../pages/Contacto/Contacto.Styles";

function ContactoForm() {
  return (
    <ContactoWrapper>
      <div className="contact-wrapper animated bounceInUp" id="contacto">
        <div className="contact-form">
          <h3>CONTACTAME</h3>
          <form action="">
            <p>
              <label>Nombre</label>
              <input type="text" name="name" placeholder="Tu Nombre" />
            </p>
            <p>
              <label>Email</label>
              <input type="email" name="email" placeholder="Correo electronico" />
            </p>
            <p>
              <label>Apellido/s</label>
                <input type="text" name="lastname" placeholder="Tu Apellido/s " />
            </p>
            <p>
              <label>Motivo</label>
              <input type="text" name="affair" placeholder="Como te ayudamos" />
            </p>
            <p className="block">
              <label>Deja tu mensaje</label>
              <textarea name="message" rows="3"></textarea>
            </p>
            <p className="block">
              <button type="submit">Enviar</button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <ul>
            <h4>Más Información</h4>
            <li><i className="fas fa-map-marker-alt" aria-hidden="true"></i> Mar del Plata, BsAs. AR.</li>
            <li><i className="fas fa-phone" aria-hidden="true"></i> (111) 111 111 111</li>
            <li><i className="fas fa-envelope-open-text" aria-hidden="true"></i> buenasolas@store.com</li>
          </ul>
          <p></p>
          <h4>Visitanos</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201170.11282386692!2d-57.76534517719316!3d-38.01718112793278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d94d19d34209%3A0xdd9670804bfed126!2sMar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1692783848496!5m2!1ses!2sar" width="320" height="250" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </ContactoWrapper>
  );
}

export default ContactoForm;
