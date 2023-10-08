import React, { useState } from 'react';
import { ProductosContainer, ProductosWrapper } from './CardsProductosStyles';
import { products } from '../../data/Products';
import CardProducto from './CardProducto';

const CardsProductos = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterByCategory = (category) => {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };

  const sortByPriceLowToHigh = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
  };

  const sortByPriceHighToLow = () => {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sorted);
  };

  const showAllProducts = () => {
    setFilteredProducts(products);
  };

  return (
    <ProductosWrapper>
      <h2 id='destacados'>Nuestra Colección</h2>
      {/* <img src="/images/1.jpg" alt="" /> */}
      <div className="btns-filter">
        <button onClick={showAllProducts}>Mostrar Todos</button>
        <button onClick={() => filterByCategory('Calzas')}>Calzas</button>
        <button onClick={() => filterByCategory('Tops')}>Tops</button>
        <button onClick={() => filterByCategory('Buzos')}>Buzos</button>
        <button onClick={sortByPriceLowToHigh}>Menor Precio</button>
        <button onClick={sortByPriceHighToLow}>Mayor Precio</button>
      </div>
      <ProductosContainer>
        {filteredProducts.map((stock) => {
          return <CardProducto key={stock.id} {...stock} />;
        })}
      </ProductosContainer>
    </ProductosWrapper>
  );
};

export default CardsProductos;
