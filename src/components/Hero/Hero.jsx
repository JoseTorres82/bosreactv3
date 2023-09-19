import React from "react";
import { HeroStyledContainer } from "./HeroStyles";
import HeroSlider from "./HeroSlider/HeroSlider";

function Hero() {
  return (
    <HeroStyledContainer>
      <div className="HeroContainerStyles">
        <div className="cicle">
        <img src="/images/pngegg.png" alt="spring" />
        </div>
       
        
        <HeroSlider />
      </div>
    </HeroStyledContainer>
  );
}

export default Hero;
