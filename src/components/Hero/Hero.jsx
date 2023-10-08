import React from "react";
import { HeroStyledContainer } from "./HeroStyles";
import HeroSlider from "./HeroSlider/HeroSlider";
import HeroSide from "./HeroSide/HeroSide";



function Hero() {
  return (
    <HeroStyledContainer>
      <div className="HeroContainerStyles">
        <HeroSlider />

      </div>
      <div className="HeroSiderContainer">
      <HeroSide />

      </div>
    </HeroStyledContainer>
  );
}

export default Hero;
