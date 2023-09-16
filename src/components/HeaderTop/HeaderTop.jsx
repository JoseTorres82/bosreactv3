import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineFacebook} from "react-icons/ai";
import { HeaderTopStyledContainer } from "./HeaderTopStyles";
import BannerCarrusel from "./Marquee/BannerCarrusel";



function HeaderTop() {
  return (
    <HeaderTopStyledContainer>
      <div className="container">
        <BannerCarrusel />
        <div className="TopContent">
          <Link to="/">Crear Cuenta</Link>
          <Link to="/login">Login</Link>
          <Link to="/"><AiOutlineFacebook /></Link>
          <Link to="/"><AiOutlineInstagram /></Link>

        </div>
      </div>
    </HeaderTopStyledContainer>
  );
}
export default HeaderTop;
