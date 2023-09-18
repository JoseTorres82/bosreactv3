import React from "react";

import {
  CardPrice,
  ContainerBtnAdd,
  ContainerPrice,
  ProductosCard,
} from "./CardsProductosStyles";

function mostrarImagenDefault(event) {
  event.target.src = '/bo_Logo.svg' ;
  event.target.style.maxWidth = '450px';
  event.target.style.marginTop= '70px';
  event.target.style.display = 'flex';
  event.target.style.height = 'auto'; 

}

const CardProducto = ({ img, title, desc, price, BtnAdd }) => {
  return (
    
    <ProductosCard>
      <img src={img} alt={title} onError={mostrarImagenDefault} />
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
