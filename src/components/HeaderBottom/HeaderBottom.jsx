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
          <input type='text' placeholder='Buscar'></input> <AiOutlineSearch />
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
