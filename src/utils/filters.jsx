import React, { useState } from "react";
import { products } from "./productos"; // Importa la lista de productos

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(products); // Estado inicial con todos los productos
  const [searchInput, setSearchInput] = useState("");

  // Función para filtrar por categoría
  const filterByCategory = (category) => {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };

  // Función para filtrar por precio menor
  const sortByPriceLowToHigh = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
  };

  // Función para filtrar por precio mayor
  const sortByPriceHighToLow = () => {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sorted);
  };

  // Función para buscar productos por nombre (sugerencias al ingresar las primeras 3 letras)
  const handleSearchInput = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    if (input.length >= 3) {
      const suggestions = products.filter((product) =>
        product.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredProducts(suggestions);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="search">Buscar producto: </label>
        <input
          type="text"
          id="search"
          value={searchInput}
          onChange={handleSearchInput}
        />
      </div>
      <button onClick={() => filterByCategory("Calzas")}>Calzas</button>
      <button onClick={() => filterByCategory("Tops")}>Tops</button>
      <button onClick={() => filterByCategory("Buzos")}>Buzos</button>
      <button onClick={sortByPriceLowToHigh}>Menor Precio</button>
      <button onClick={sortByPriceHighToLow}>Mayor Precio</button>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
