import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id } = action.payload;
      const existingProduct = state.find(item => item.id === id);
      if (existingProduct) {
        const updatedCart = state.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return updatedCart;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload.id);
    case "CLEAR_CART":
      return [];
    case "SHOW_MODAL":
      return state;
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart && savedCart.length > 0) {
      dispatch({ type: "CLEAR_CART" }); 
      savedCart.forEach(item => dispatch({ type: "ADD_TO_CART", payload: item }));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const addToCart = (product) => {
    const { id } = product;
    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
      dispatch({ type: "ADD_TO_CART", payload: product }); // Aumentar cantidad si ya existe
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product }); // Agregar al carrito si no existe
    }
  };

  const getTotalItemsInCart = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, dispatch, addToCart, getTotalItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw  Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}

