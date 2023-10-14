import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Routes from "./routes/Routes";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom/FooterBottom";
import { CartProvider } from "./Context/CartContext";
import { ProductProvider } from "./data/ProductContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <ProductProvider>
          <Header />
          <Layout>
            <Routes />
          </Layout>
        </ProductProvider>
        <Footer />
      </CartProvider>
      <FooterBottom />
    </Router>
  );
}

export default App;
