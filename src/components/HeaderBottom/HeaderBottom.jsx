import React from "react";
import { HeaderBottomStyled } from "./HeaderBottomStyles";
import { AiOutlineSearch } from "react-icons/ai";
import { TfiBag } from "react-icons/tfi";
import { Link } from "react-router-dom";

function HeaderBottom() {
  return (
    <HeaderBottomStyled>
      <div className="container">
        <div className="ContenedorNavegacion">
        <div className="search">
          <h3>
            Buscador <AiOutlineSearch />
          </h3>
        </div>
        <Link to="/">
          <img src="logo.svg" alt="Header Logo" />
        </Link>
        <div className="bagContainer">
          <TfiBag className="bag" />
        </div>
        </div>
      </div>
    </HeaderBottomStyled>
  );
}

export default HeaderBottom;
