import React from 'react';
import ButtonMoreInfo from "../UI/Buttons/ButtonMoreInfo";
import { products } from '../../data/Products'; 
import {
  ProductosCard,
  ContainerPrice,
  CardPrice,
  ContainerBtnAdd,
} from './CardsProductosStyles'; 

function mostrarImagenDefault(event) {
  event.target.src = '/bo_Logo.svg';
  event.target.alt = 'Imagen no disponible';
  event.target.style.maxWidth = '450px';
  event.target.style.marginTop = '70px';
  event.target.style.display = 'flex';
  event.target.style.height = 'auto';
}

const Sugeridos = () => {

  const getRandomProducts = () => {
    const randomProducts = [];
    while (randomProducts.length < 2) {
      const randomIndex = Math.floor(Math.random() * products.length);
      const randomProduct = products[randomIndex];
      if (!randomProducts.some((product) => product.id === randomProduct.id)) {
        randomProducts.push(randomProduct);
      }
    }
    return randomProducts;
  };

  const randomProducts = getRandomProducts();

  return (
    <div className="sugeridos-container">
      <div className="sugeridos-products">
        {randomProducts.map((product) => (
          <ProductosCard key={product.id}>
            <img src={product.img} alt={product.title} onError={mostrarImagenDefault} />
            <div className="intro">
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
              <div className="btn-moreInfo">
                <ButtonMoreInfo />
              </div>
            </div>  
            <ContainerPrice>
              <CardPrice>${product.price}</CardPrice>
            </ContainerPrice>
            <ContainerBtnAdd>
            </ContainerBtnAdd>
          </ProductosCard>
        ))}
      </div>
    </div>
  );
  
};


export default Sugeridos;

