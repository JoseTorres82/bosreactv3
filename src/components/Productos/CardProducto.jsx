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
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 998;
  background-color: #f4511e;
  padding: 20px;
  color: #FFFF;
  border: 1px solid #ccc;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  box-shadow: -8px 9px 10px rgba(0, 0, 0, 0.2);
`;

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
      img,
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
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 20000); // Ocultar el modal después de 20 segundos

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showModal]);

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
        <ButtonAdd onClick={handleAddToCart} product={{ id, img, title, desc, price }} />
      </ContainerBtnAdd>
      {showModal && productToAdd && (
        <ModalContainer>
          Agregaste {productToAdd.title} al carrito
        </ModalContainer>
      )}
    </ProductosCard>
  );
}

export default CardProducto;
