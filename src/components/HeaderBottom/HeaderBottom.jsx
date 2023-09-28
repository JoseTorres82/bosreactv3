import React from "react";
import { HeaderBottomStyled } from "./HeaderBottomStyles";

import { TfiBag } from "react-icons/tfi";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function HeaderBottom() {
  return (
    <HeaderBottomStyled>
      <div className="container">
        <div className="ContenedorNavegacion">
        <div className="search">
          <SearchBar/>
        </div>
        <Link to="/">
          <img src="logo.svg" alt="Header Logo" />
        </Link>
        <div className="bagContainer">
          <span>0</span>
          <TfiBag className="bag" />
        </div>
        </div>
      </div>
    </HeaderBottomStyled>
  );
}

export default HeaderBottom;
