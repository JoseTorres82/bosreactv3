import React from "react";
import { BannerContainer } from "./BannerStyles";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <BannerContainer>
      <div className="container">
        <Link to="/"> <img src="/images/3.jpg" alt="banner3" /></Link>
        <Link to="/"><img src="/images/2.jpg" alt="banner2" /></Link>
      </div>
    </BannerContainer>
  );
}

export default Banner;
