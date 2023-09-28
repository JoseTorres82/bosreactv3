import React from 'react'
import {  ProductosContainer, ProductosWrapper } from '../../../components/Productos/CardsProductosStyles'
import { products } from '../../../data/Products'
import CardProducto from '../../../components/Productos/CardProducto'



const CardsHero = () => {
    const DestacarProducts = products.slice(5, 7);
    return (
      <ProductosWrapper>
          <ProductosContainer>
              {
                  DestacarProducts.map((stock) => {
                      return <CardProducto key={stock.id} {...stock} />
                  })
              }
          </ProductosContainer>
  
      </ProductosWrapper>
    )
}
export default CardsHero