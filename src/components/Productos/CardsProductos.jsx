import React from 'react'
import {  ProductosContainer, ProductosWrapper } from './CardsProductosStyles'
import { products } from '../../data/Products'
import CardProducto from './CardProducto'

/* import Button from '../UI/Button/Button' */

const CardsProductos = () => {
    return (
        
      <ProductosWrapper>
          <h2 id='destacados' >Nuestros Productos</h2>
          <ProductosContainer>
              {
                  products.map((stock) => {
                      return <CardProducto key={stock.id} {...stock} />
                  })
              }
          </ProductosContainer>
    </ProductosWrapper>
    
    );
 
};
export default CardsProductos