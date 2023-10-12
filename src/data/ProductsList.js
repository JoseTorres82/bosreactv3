import React, { useContext } from 'react';
import { ProductContext } from './ProductContext'; 

function ProductsList() {
    const { products, addToCart, cart } = useContext(ProductContext);
  

    const handleAddToCart = (product) => {
      addToCart(product);
    };
  
    return (
      <div>
        <h1>Lista de Productos</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
              <p>Precio: ${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ProductsList;
  
