import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MenuProvider } from "./components/Navbar/MenuContext/MenuContext";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Routes from "./routes/Routes";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom/FooterBottom";
import { ModalProvider } from "./Context/ModalContext";
import { CartProvider } from "./Context/CartContext";
import { ProductProvider } from "./data/ProductContext"; 


function App() {
  return (
    <Router>
      <MenuProvider>
       <ModalProvider>
          <CartProvider>
          <Header />
            <ProductProvider> 
              <Layout>
                <Routes />
              </Layout>
            </ProductProvider>
            <Footer />
          </CartProvider>
        </ModalProvider>
      </MenuProvider>
      <FooterBottom />
    </Router>
  );
}

export default App;
