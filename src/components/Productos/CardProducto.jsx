import React from "react";
import ButtonAdd from "../UI/Buttons/ButtonAdd";
import {
  CardPrice,
 ContainerBtnAdd,
  ContainerPrice,
  ProductosCard,
} from "./CardsProductosStyles";
import ButtonMoreInfo from "../UI/Buttons/ButtonMoreInfo";

function mostrarImagenDefault(event) {
  event.target.src = '/bo_Logo.svg';
  event.target.alt ='imagen no disponible';
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
          <ButtonMoreInfo />
        </div>
      </div>  
      <ContainerPrice>
        <CardPrice>${price}</CardPrice>
      </ContainerPrice>
      <ContainerBtnAdd>
      {/* <ButtonAdd /> */}
      </ContainerBtnAdd>
    </ProductosCard>
    
  );
};

export default CardProducto;
