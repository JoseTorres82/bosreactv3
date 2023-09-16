import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Productos from "../pages/Productos/Productos";
import AboutUs from "../pages/About/AboutUs";
import ContactoForm from "../pages/Contacto/Contacto";


function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/Productos" element={<Productos />} />
      <Route path="/Nosotros" element={<AboutUs />} />
      <Route path="/Contacto" element={<ContactoForm />} /> 
     
    </ReactDomRoutes>
  );
}

export default Routes;