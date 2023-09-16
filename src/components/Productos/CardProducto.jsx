import React from "react";

import {
  CardPrice,
  ContainerBtnAdd,
  ContainerPrice,
  ProductosCard,
} from "./CardsProductosStyles";


const CardProducto = ({ img, title, desc, price, BtnAdd }) => {
  return (
    
    <ProductosCard>
      <img src={img} alt={title} />
      <div className="intro">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="btn-moreInfo">
        <button><span>Más Info.</span></button>
        </div>
      </div>  
      <ContainerPrice>
        <CardPrice>${price}</CardPrice>
      </ContainerPrice>
      <ContainerBtnAdd><button><span>Agregar</span></button>
      </ContainerBtnAdd>
    </ProductosCard>
    
  );
  
};

export default CardProducto;
