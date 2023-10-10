import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
/* import { CartProvider } from "../src/components/Navbar/CartContext/CartContext"; */
/* import MenuHamburguesa from "./components/Navbar/BurguerMenu/MenuHamburguesa"; */
/* import { MenuProvider } from "./components/Navbar/MenuContext/MenuContext"; */
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Routes from "./routes/Routes";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom/FooterBottom";


function App() {
  return (
    <Router>
      {/*   <CartProvider>  */}

        <Header />
       {/*  <MenuHamburguesa /> */}
   
      <Layout>
        <Routes />
      </Layout>

      <Footer />
      <FooterBottom />
      {/*       </CartProvider> */}
    </Router>
  );
}

export default App;
