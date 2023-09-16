import React from 'react'
import {  ProductosContainer, ProductosWrapper } from '../../../components/Productos/CardsProductosStyles'
import { products } from '../../../data/Products'
import CardProducto from '../../../components/Productos/CardProducto'



const CardsProductos = () => {
    const DestacarProducts = products.slice(0, 4);
    return (
      <ProductosWrapper>
          <h2 id='destacados'>Productos Destacados</h2>
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
export default CardsProductos