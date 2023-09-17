import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const uniqueCategories = [...new Set(products.map((product) => product.category))]; 

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2>Productos</h2>
      <div className="category-filter">
        <button onClick={() => handleCategoryChange('Todas')}>Todas</button>
        {uniqueCategories.map((category) => (
          <button key={category} onClick={() => handleCategoryChange(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="product-list">
        {products
          .filter((product) => selectedCategory === 'Todas' || product.category === selectedCategory)
          .map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
              <p>Precio: ${product.price}</p>
              <img src={product.img || '/images/imagen_default.jpg'} alt={product.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
