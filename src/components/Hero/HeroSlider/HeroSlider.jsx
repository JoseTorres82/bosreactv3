import React from "react";
import { SliderHeroContainer } from "./HeroSliderStyles";

function HeroSlider() {
  return (
    <SliderHeroContainer>
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <img src="/images/img14-removebg.png" alt="img14" />

      <div className="textSlider">
        <div className="contenedorSlider">
          <div className="title">
            <h1>Buenas Olas</h1>
          </div>
          <p>
            Buenas Olas Store, los mejores outfits para cualquier temoprada,
            entrena con estilo, comodidad y con la mas amplia combinacion de
            conjuntos deportivos. Aprovecha las ofertas de temporada
          </p>
          <div className="cicle2"></div>
          <div className="cicle3"></div>
          <div className="cicle4"></div>
        </div>
      </div>
    </SliderHeroContainer>
  );
}

export default HeroSlider;
