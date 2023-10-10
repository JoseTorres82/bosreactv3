import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export function useMenu() {
  return useContext(MenuContext);
}

export function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
