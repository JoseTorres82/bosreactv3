import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(
    {
      id: 1,
      title: "Calzas Elegance",
      desc: "Calzas deportivas elegantes con detalles de encaje en los costados.",
      price: 44.99,
      category: "Calzas",
      img: "/images/img1.webp",
    },
    {
      id: 2,
      title: "Top Deportivo Aero",
      desc: "Top deportivo con tejido transpirable para mantenerse fresca durante el ejercicio.",
      price: 27.99,
      category: "Tops",
      img: "/images/img9.webp",
    },
    {
      id: 3,
      title: "Calzas Performance",
      desc: "Calzas de alto rendimiento con tecnología que mejora el soporte muscular.",
      price: 49.99,
      category: "Calzas",
      img: "/images/img10.webp",
    },
    {
      id: 4,
      title: "Top Deportivo Sculpt",
      desc: "Top deportivo con diseño moldeador que realza la figura.",
      price: 32.99,
      category: "Tops",
      img: "/images/img4.webp",
    },
    {
      id: 5,
      title: "Calzas Estilo Floral",
      desc: "Calzas estampadas con motivos florales para un look fresco y primaveral.",
      price: 37.99,
      category: "Calzas",
      img: "/images/img24.webp",
    },
    {
      id: 6,
      title: "Top Deportivo Reflectante",
      desc: "Top deportivo con detalles reflectantes para mayor visibilidad en la oscuridad.",
      price: 31.99,
      category: "Tops",
      img: "/images/img25.webp",
    },
    {
      id: 7,
      title: "Calzas Compresión Activa",
      desc: "Calzas de compresión que estimulan la circulación sanguínea durante el ejercicio.",
      price: 54.99,
      category: "Calzas",
      img: "/images/img7.webp",
    },
    {
      id: 8,
      title: "Top Deportivo Power",
      desc: "Top deportivo de alto soporte para actividades de alta intensidad.",
      price: 36.99,
      category: "Tops",
      img: "/images/img8.webp",
    },

    {
      id: 9,
      title: "Buzo Clásico",
      desc: "Buzo clásico de algodón para mantenerte abrigado y cómodo.",
      price: 39.99,
      category: "Buzos",
      img: "/images/img17.webp",
    },
    {
      id: 10,
      title: "Buzo Deportivo Tech",
      desc: "Buzo deportivo con tecnología de control de humedad para mantenerse seco durante el ejercicio.",
      price: 45.99,
      category: "Buzos",
      img: "images/img22.webp",
    },

    {
      id: 11,
      title: "Buzo Cálido de Invierno",
      desc: "Buzo perfecto para el invierno con forro de felpa.",
      price: 59.99,
      category: "Buzos",
      img: "/images/img11.webp",
    },
    {
      id: 12,
      title: "Buzo Deportivo Ligero",
      desc: "Buzo ligero y cómodo para actividades deportivas.",
      price: 34.99,
      category: "Buzos",
      img: "/images/img12.webp",
    },
    {
      id: 13,
      title: "Buzo con Capucha",
      desc: "Buzo con capucha ajustable para mantener el calor en los días fríos.",
      price: 42.99,
      category: "Buzos",
      img: "/images/img18.webp",
    },
    {
      id: 14,
      title: "Buzo Deportivo Reflectante",
      desc: "Buzo deportivo con detalles reflectantes para mayor visibilidad durante el entrenamiento nocturno.",
      price: 47.99,
      category: "Buzos",
      img: "/* /images/img14.webp */",
    },
    {
      id: 15,
      title: "Buzo con Cremallera",
      desc: "Buzo con cremallera frontal para un fácil ajuste.",
      price: 38.99,
      category: "Buzos",
      img: "/images/img21.webp",
    },

  );
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <ProductContext.Provider value={{ products, addToCart, cart }}>
      {children}
    </ProductContext.Provider>
  );
};
