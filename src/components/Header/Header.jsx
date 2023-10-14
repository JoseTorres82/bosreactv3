import React from "react";
import { HeaderStyled } from "./HeaderStyles";

import Navbar from "../Navbar/Navbar";

import HeaderBottom from "../HeaderBottom/HeaderBottom";
import { MenuProvider } from "../Navbar/MenuContext/MenuContext";

function Header() {
  return (
    <HeaderStyled>
      
      <HeaderBottom />
      <MenuProvider>
        <Navbar />
      </MenuProvider>
    </HeaderStyled>
  );
}

export default Header;
