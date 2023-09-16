import React from "react";
import { SuscribeStyled } from "./SuscribeStyles";

const Suscribe = () => {
  return (
    <SuscribeStyled>
      <div className="section-newsletter-home">
        <div className="newsletter-container">
          <h2>Recibir todas las ofertas</h2>
          <p className="mb-4">
            Quieres recibir nuestras ofertas? Registrate ya mismo y comenzá a
            disfrutarlas!
          </p>
          <input
            type="email"
            name="email"
            className="email-inp"
            required
            placeholder="Ingresa tu e-mail"
          ></input>
          <input
            type="submit"
            name="contact"
            className="btn btn-primary"
            value="Enviar"
          ></input>
        </div>
      </div>
    </SuscribeStyled>
  );
};

export default Suscribe;
