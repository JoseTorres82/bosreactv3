import React from "react";
import { BannerContainer } from "./BannerStyles";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <BannerContainer>
      <div className="container">
        <Link to="/Productos"> <img src="/images/3.webp" alt="banner3" /></Link>
        <Link to="/Login"><img src="/images/2.webp" alt="banner2" /></Link>
      </div>
    </BannerContainer>
  );
}

export default Banner;
