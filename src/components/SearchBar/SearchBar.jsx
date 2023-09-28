import React, { useState } from 'react';
import {products} from '../../data/Products';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    // Filtrar productos que coincidan con las primeras tres letras del nombre
    const matchingProducts = products.filter((product) =>
      product.nombre.toLowerCase().startsWith(inputValue.toLowerCase().slice(0, 3))
    );

    // Actualizar la lista de sugerencias
    setSuggestions(matchingProducts);

    // Mostrar u ocultar el modal de autocompletado
    setShowModal(!!inputValue && matchingProducts.length > 0);
  };

  const handleSelectProduct = (productName) => {
    setQuery(productName);
    setShowModal(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar un producto..."
        value={query}
        onChange={handleInputChange}
      />
      {showModal && (
        <div className="suggestions-modal">
          {suggestions.length > 0 ? (
            <ul>
              {suggestions.map((product) => (
                <li key={product.id} onClick={() => handleSelectProduct(product.nombre)}>
                  {product.nombre}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay coincidencias</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
