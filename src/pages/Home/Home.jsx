import React from "react";
import  {HomeWrapper} from "../../pages/Home/HomeStyles";
import Hero from "../../components/Hero/Hero";
import Destacados from "../Home/Destacados/Destacados";
import Subscribe from "../../components/Suscripcion/Suscribe";
import Banner from "../../components/BannerPubli/Banner";

function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <Destacados />
      <Banner />
      <Subscribe />
    </HomeWrapper>
  );
}

export default Home;
