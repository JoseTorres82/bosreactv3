import React from "react";

import { ProductosWrapper } from "./ProductosStyles";
import CardsProductos from "../../components/Productos/CardsProductos";

function Productos() {
  return (
    <ProductosWrapper>
      <CardsProductos />
    </ProductosWrapper>
  );
}

export default Productos;
