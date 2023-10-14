import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../data/ProductContext";
import ButtonAdd from "../UI/Buttons/ButtonAdd";
import ButtonMoreInfo from "../UI/Buttons/ButtonMoreInfo";
import {
  CardPrice,
  ContainerBtnAdd,
  ContainerPrice,
  ProductosCard,
} from "./CardsProductosStyles";



function mostrarImagenDefault(event) {
  event.target.src = '/bo_Logo.svg';
  event.target.alt = 'imagen no disponible';
  event.target.style.maxWidth = '450px';
  event.target.style.marginTop = '70px';
  event.target.style.display = 'flex';
  event.target.style.height = 'auto';
}

const CardProducto = ({ id, img, title, desc, price }) => {
  const { addToCart } = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);
  const [productToAdd, setProductToAdd] = useState(null);

  const handleAddToCart = () => {
    const product = {
      id,
      title,
      desc,
      price,
    };

    setProductToAdd(product);
    setShowModal(true);

    addToCart(product);
    console.log(handleAddToCart)
  };

  useEffect(() => {
    
  }, );

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
        <ButtonAdd onClick={handleAddToCart} product={{ id, title, desc, price }} />
      </ContainerBtnAdd>
     
    </ProductosCard>
  );
}

export default CardProducto;
